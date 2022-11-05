# &lt;leave-check-form&gt; element

Confirm to leave the page when editing a form.

## Installation

```
$ npm install --save @sonicgarden/leave-check-form-element
```

## Usage

### Script

Import as ES modules:

```js
import '@sonicgarden/leave-check-form-element'
```

```html
<leave-check-form>
  <form>
    <select name="country">
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>
    <textarea name="comment"></textarea>
    <input type="submit" value="submit">
  </form>
</leave-check-form>
```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].
- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## License

Distributed under the MIT license. See LICENSE for details.
