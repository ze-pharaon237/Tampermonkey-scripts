// ==UserScript==
// @name         Full width images – Manga Scantrad
// @author       Ze-pharaon237
// @namespace    https://github.com/ze-pharaon237/Tampermonkey-scripts/
// @source       Github
// @version      0.1
// @description  Supprime les bordures des pages de mangas
// @match        https://manga-scantrad.io/*
// @match        https://www.manga-scantrad.io/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.c-page-content {
  &>.content-area {
    &>.container {
      padding: 0;

      #chapter-heading,
      .entry-header,
      div.row:has(+ .wp-manga-tags-wrapper),
      .wp-manga-tags-wrapper {
        padding-left: 15px;
        padding-right: 15px;
      }

      div.row:has(+ .wp-manga-tags-wrapper) {
        padding-left: 15px;
        padding-right: 15px;
      }


      .c-blog-post {
        &>.entry-content {
          .read-container {
            .reading-content {
              padding: 0;
            }
          }
        }
      }

    }
  }
}
`);