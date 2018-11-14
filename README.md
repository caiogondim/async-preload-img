# async-preload-img

> Promise based image preloader

## Installation

```bash
npm install --save async-preload-img
```

## Usage

`async/await`

```js
import preloadImg from 'async-preload-img';

try {
  await preloadImg('https://image-path.com')
} catch (error) {
  // Failed to load image
}
```

`Promise`

```js
import preloadImg from 'async-preload-img';

preloadImg('https://image-path.com')
  .then(() => {
    // Image loaded
  })
  .catch(() => {
    // Failed to load image
  })
```

## Sponsor

If you found this library useful and are willing to donate, transfer some
bitcoins to `1BqqKiZA8Tq43CdukdBEwCdDD42jxuX9UY`.

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
