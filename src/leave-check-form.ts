type State = {
  formDataJson?: string
  isSubmitting?: boolean
}

const states = new WeakMap<LeaveCheckForm, State>()

export class LeaveCheckForm extends HTMLElement {
  connectedCallback(): void {
    requestAnimationFrame(() => this.init())
    window.addEventListener('beforeunload', this.onBeforeUnload)
    this.addEventListener('submit', this.onSubmit)
  }

  disconnectedCallback(): void {
    window.removeEventListener('beforeunload', this.onBeforeUnload)
    this.removeEventListener('submit', this.onSubmit)
  }

  init = (): void => {
    const formDataJson = this.formDataJson
    if (!formDataJson) return
    this.state = {formDataJson}
  }

  onBeforeUnload = (event: BeforeUnloadEvent): void => {
    if (this.state.isSubmitting || this.state.formDataJson === this.formDataJson) {
      return
    }

    event.preventDefault()
    event.returnValue = ''
  }

  onSubmit = (): void => {
    if (!this.form?.checkValidity()) return

    this.state = {...this.state, isSubmitting: true}
  }

  get state(): State {
    return states.get(this) ?? {}
  }

  set state(newState: State) {
    states.set(this, newState)
  }

  get form(): HTMLFormElement | undefined {
    return this.querySelector('form') ?? undefined
  }

  get formDataJson(): string | undefined {
    if (!this.form) return undefined

    const formData = new FormData(this.form)
    return JSON.stringify(Object.fromEntries(formData))
  }
}

declare global {
  interface Window {
    LeaveCheckForm: typeof LeaveCheckForm
  }
}

if (!window.customElements.get('leave-check-form')) {
  window.LeaveCheckForm = LeaveCheckForm
  window.customElements.define('leave-check-form', LeaveCheckForm)
}
