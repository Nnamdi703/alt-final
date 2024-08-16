/* eslint-disable react/no-unescaped-entities */
"use client";
import { FormEvent, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");
  const [url, setUrl] = useState("");

  async function shortURL(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
    if (response.ok) {
      const data = await response.text();
      setShortUrl(data);
    } else {
      alert("Error shortening URL");
    }
  }

  async function saveSvg(svgEl: Element, name: string) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="max-w-md w-full space-y-4 px-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl text-orange-600 font-bold">
              URL Shortener
            </h1>
            <p className="text-muted-gray-100">
              Enter a long URL and we'll generate a short, shareable link.
            </p>
          </div>

          <div className="rounded-lg border bg-card shadow-sm">
            <form onSubmit={shortURL} className="p-6 space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="url"
                >
                  Long URL
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-gray-900 px-3 py-2 text-sm ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="url"
                  type="url"
                  placeholder="https://example.com/very-long-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 h-10 px-4  w-full"
                type="submit"
              >
                Shorten URL
              </button>
            </form>

            {shortUrl.length > 0 && (
              <div className="px-6 pb-6 text-gray-200">
                <div className="flex flex-col justify-center align-middle gap-2">
                  <span className="flex justify-center text-orange-600">
                    Your short URL:
                    <a href={shortUrl} className="ps-1" target="_blank">
                      {shortUrl}
                    </a>
                  </span>

                  <div className="flex justify-start gap-5">
                    <QRCodeSVG
                      id="shortUrlId"
                      size={180}
                      className="border-2  border-gray-200 rounded-md text-gray-200"
                      value={shortUrl}
                    />

                    <div className="flex flex-col gap-3">
                      {/* <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 h-10 px-4 py-2 w-full"
                        type="submit"
                      >
                        Share URL
                      </button> */}
                      <div className="flex gap-2 ">
                        <FacebookShareButton url={shortUrl}>
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <LinkedinShareButton url={shortUrl}>
                          <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                        <TwitterShareButton url={shortUrl}>
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shortUrl}>
                          <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                      </div>

                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 h-10 px-4 py-2 w-full"
                        type="button"
                        onClick={() =>
                          saveSvg(
                            document.getElementById("shortUrlId")!,
                            `${shortUrl.split("/")[3]}.svg`
                          )
                        }
                      >
                        Download QR Code
                      </button>

                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-900 h-10 px-4 py-2 w-full"
                        type="submit"
                      >
                        Analytics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
