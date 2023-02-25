import { checkIfBrowserSupported, takeScreenshot } from '@xata.io/screenshot';
import { useState } from 'react';

export default function Index() {
  const [screenshot, setScreenshot] = useState('');

  const doIt = () => {
    if (!checkIfBrowserSupported()) {
      throw new Error("Can't because it's not supported");
    }

    takeScreenshot().then(setScreenshot);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <button onClick={doIt}>Take a screenshot</button>
      <img
        alt="We love you"
        src="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized-large.gif"
      />

      {screenshot && (
        <section>
          <p>Your screenshot is: {screenshot}</p>

          <p>
            Or, as an image:{' '}
            <div style={{ padding: 16, border: '1px solid eee' }}>
              <img alt="screenshot" src={screenshot} />
            </div>
          </p>
        </section>
      )}

      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
