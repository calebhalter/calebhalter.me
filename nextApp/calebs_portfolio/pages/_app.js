import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/Navigation-Clean.css'
import '../bootstrap/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "../node_modules/react-image-gallery/styles/css/image-gallery.css"

require.config({
  paths: {
      jquery: '../js_files/jquery-3.5.1.min.js',
      bootstrap: '../bootstrap/js/bootstrap.min.js'
  },
  shim: {
      'bootstrap': {
          deps: ['jquery'],
      },
    }
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
