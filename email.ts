const sgMail = require("@sendgrid/mail");

const htmlEmail = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  data-editor-version="2"
  class="sg-campaigns"
  xmlns="http://www.w3.org/1999/xhtml"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap"
      rel="stylesheet"
    />

    <style type="text/css">
      .font-primary {
        font-family: "Clash Display, sans-serif";
      }

      .font-secondary {
        font-family: "Plus Jakarta Sans, sans-serif";
      }

      h1,
      h2,
      h3,
      h4 {
        margin: 0;
      }

      h1 {
        font-size: 28px;
      }

      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 14px;
      }

      h4 {
        font-size: 12px;
      }

      .text-base {
        font-weight: 400;
      }

      .text-medium {
        font-weight: 500;
      }

      .text-semibold {
        font-weight: 600;
      }

      .text-bold {
        font-weight: 700;
      }

      .grid-cols-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      .grid-cols-3 {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr;
      }

      body {
        color: #000000;
        width: 640px;
      }
      body a {
        color: #1188e6;
        text-decoration: none;
      }
      p {
        margin: 0;
        padding: 0;
      }
      table.wrapper {
        width: 100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      ul ul ul ul {
        list-style-type: disc !important;
      }
      ol ol {
        list-style-type: lower-roman !important;
      }
      ol ol ol {
        list-style-type: lower-latin !important;
      }
      ol ol ol ol {
        list-style-type: decimal !important;
      }
      @media screen and (max-width: 480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
          text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 100% !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .social-icon-column {
          display: inline-block !important;
        }
      }
    </style>
    <!--user entered Head Start-->
    <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper">
      <div class="webkit">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          class="wrapper"
          bgcolor="#FFFFFF"
        >
          <tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table
                width="100%"
                role="content-container"
                class="outer"
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td width="100%">
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>
                        <td>
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="width: 100%; max-width: 640px"
                            align="center"
                          >
                            <tr>
                              <td
                                role="modules-container"
                                style="
                                  padding: 32px 32px 32px 32px;
                                  color: #000000;
                                  text-align: left;
                                "
                                bgcolor="#FFFFFF"
                                width="100%"
                                align="left"
                              >
                                <table
                                  class="module preheader preheader-hide"
                                  role="module"
                                  data-type="preheader"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    display: none !important;
                                    mso-hide: all;
                                    visibility: hidden;
                                    opacity: 0;
                                    color: transparent;
                                    height: 0;
                                    width: 0;
                                  "
                                >
                                  <tr>
                                    <td role="module-content">
                                      <p></p>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  class="wrapper"
                                  role="module"
                                  data-type="image"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="table-layout: fixed"
                                  data-muid="bbc2702a-35b7-4b05-a5be-8c3769b4e005"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          font-size: 6px;
                                          line-height: 10px;
                                          padding: 24px 24px 24px 24px;
                                        "
                                        valign="top"
                                        align="left"
                                      >
                                        <img
                                          class="max-width"
                                          border="0"
                                          style="
                                            display: block;
                                            width: auto;
                                            height: 48px;
                                          "
                                          width="600"
                                          alt=""
                                          data-proportionally-constrained="true"
                                          data-responsive="true"
                                          src="http://cdn.mcauto-images-production.sendgrid.net/32511bac4be7de49/8df35409-acdb-4127-83ab-453848096b31/142x48.png"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  class="module"
                                  role="module"
                                  data-type="text"
                                  width="100%"
                                  style="padding: 32px 24px"
                                >
                                  <tbody>
                                    <tr>
                                      <td width="100%">
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="text"
                                          width="100%"
                                          style="
                                            padding-bottom: 12px;
                                            border-bottom: 1px solid #eaecf0;
                                          "
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                height="100%"
                                                valign="top"
                                                role="module-content"
                                                align="left"
                                              >
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    color: #475467;
                                                    white-space: nowrap;
                                                  "
                                                >
                                                  Receipt for:
                                                </h3>
                                              </td>
                                              <td align="right">
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    color: #475467;
                                                    width: 100%;
                                                    float: right;
                                                  "
                                                >
                                                  Transation ID:
                                                </h3>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left">
                                                <h3
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    color: #475467;
                                                    white-space: nowrap;
                                                  "
                                                >
                                                  Akira Taro
                                                </h3>
                                              </td>
                                              <td align="right">
                                                <h3
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    color: #475467;
                                                    width: 100%;
                                                    float: right;
                                                  "
                                                >
                                                  872635637872-287627
                                                </h3>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 24px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h2
                                                  class="font-primary text-medium"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Payment summary
                                                </h2>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 12px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  Amount billed
                                                </h3>
                                              </td>
                                              <td>
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  Date
                                                </h3>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <h1
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  USD$12.00
                                                </h1>
                                              </td>
                                              <td>
                                                <h3
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  September 11, 2023, 10:00 AM
                                                </h3>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 24px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  Billing reason
                                                </h3>
                                              </td>
                                              <td>
                                                <h3
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  Product type
                                                </h3>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <h3
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Non available
                                                </h3>
                                              </td>
                                              <td>
                                                <h3
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Trustle’s Killswitch
                                                </h3>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="
                                            margin-top: 24px;
                                            padding: 12px 0;
                                            border-top: 1px solid #eaecf0;
                                            border-bottom: 1px solid #eaecf0;
                                          "
                                        >
                                          <tbody>
                                            <tr>
                                              <td style="width: 50%">
                                                <h4
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  Purchase
                                                </h4>
                                              </td>
                                              <td
                                                align="left"
                                                style="width: 25%"
                                              >
                                                <h4
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  No. of accounts
                                                </h4>
                                              </td>
                                              <td
                                                align="right"
                                                style="width: 25%"
                                              >
                                                <h4
                                                  class="font-secondary text-base"
                                                  style="
                                                    line-height: 24px;
                                                    color: #475467;
                                                  "
                                                >
                                                  AMOUNT
                                                </h4>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 12px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td style="width: 50%">
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Removal of 12 accounts across
                                                  major<br />social media
                                                  platforms
                                                </h4>
                                              </td>
                                              <td
                                                align="left"
                                                style="width: 25%"
                                              >
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  12
                                                </h4>
                                              </td>
                                              <td
                                                align="right"
                                                style="width: 25%"
                                              >
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  $12.00
                                                </h4>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 16px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Tax
                                                </h4>
                                              </td>
                                              <td align="right">
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  $3.00
                                                </h4>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          width="100%"
                                          style="margin-top: 40px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h4
                                                  class="font-secondary text-semibold"
                                                  style="
                                                    line-height: 20px;
                                                    color: #344054;
                                                  "
                                                >
                                                  Total
                                                </h4>
                                              </td>
                                              <td align="right">
                                                <h3
                                                  class="font-secondary text-bold"
                                                  style="
                                                    line-height: 24px;
                                                    color: #344054;
                                                  "
                                                >
                                                  $12.00
                                                </h3>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div
                                          class=""
                                          style="
                                            display: flex;
                                            margin-top: 24px;
                                          "
                                        >
                                          <a
                                            href="https://trustle-bata.com"
                                            style="
                                              text-decoration: none;
                                              padding: 10px 16px;
                                              border-radius: 8px;
                                              border: 1px solid #eaecf0;
                                              box-shadow: 0px 1px 2px 0px
                                                #1018280d;
                                              background: white;
                                            "
                                          >
                                            <h3
                                              class="font-secondary text-medium"
                                              style="
                                                color: #344054;
                                                line-height: 24px;
                                              "
                                            >
                                              See full order
                                            </h3>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  class="wrapper"
                                  role="module"
                                  data-type="social"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="padding: 32px 24px"
                                  data-muid="fd2f340a-6116-4ceb-a149-aa27a8e8a4e5"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          font-size: 6px;
                                          line-height: 10px;
                                          padding: 0px 0px 0px 0px;
                                        "
                                        valign="top"
                                      >
                                        <h4
                                          class="font-secondary text-base"
                                          style="line-height: 18px"
                                        >
                                          This is an automated message. Please
                                          do not reply. Should you require any
                                          information regarding Trustle's
                                          services, please don't hesitate to
                                          <span
                                            ><a
                                              href="https://www.facebook.com/sendgrid/"
                                              style="color: #63b14e"
                                              >out to us
                                            </a></span
                                          >. Furthermore, you have the option to
                                          customise your email
                                          <span
                                            ><a
                                              href="https://www.facebook.com/sendgrid/"
                                              style="color: #63b14e"
                                              >preferences</a
                                            ></span
                                          >.<br /><br />Trustle-Beta, Ulrika
                                          Gatan 6, 115 23, Stockholm, Sweden.<br />©
                                          2023 Trustle-beta v.1. All rights
                                          reserved.
                                        </h4>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="social"
                                          width="100%"
                                          style="margin-top: 48px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img
                                                  class="max-width"
                                                  style="
                                                    display: block;
                                                    width: auto;
                                                    height: 32px;
                                                  "
                                                  alt=""
                                                  data-proportionally-constrained="true"
                                                  data-responsive="true"
                                                  src="http://cdn.mcauto-images-production.sendgrid.net/32511bac4be7de49/8df35409-acdb-4127-83ab-453848096b31/142x48.png"
                                                />
                                              </td>
                                              <td style="float: right">
                                                <table
                                                  class="module"
                                                  role="module"
                                                  data-type="social"
                                                  width="100%"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style="padding: 0px 5px"
                                                        class="social-icon-column"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="https://www.facebook.com/sendgrid/"
                                                          target="_blank"
                                                          alt="Twitter"
                                                          title="Twitter"
                                                          style="
                                                            display: inline-block;
                                                            height: 20px;
                                                            width: 20px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Twitter"
                                                            title="Twitter"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/32511bac4be7de49/6d2531fe-ba55-4fbc-a8e4-b7bddf05302d/20x20.png"
                                                            style="
                                                              height: 20px;
                                                              width: 20px;
                                                            "
                                                            height="20"
                                                            width="20"
                                                          />
                                                        </a>
                                                      </td>
                                                      <td
                                                        style="padding: 0px 5px"
                                                        class="social-icon-column"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="https://twitter.com/sendgrid"
                                                          target="_blank"
                                                          alt="Facebook"
                                                          title="Facebook"
                                                          style="
                                                            display: inline-block;
                                                            height: 20px;
                                                            width: 20px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Facebook"
                                                            title="Facebook"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/32511bac4be7de49/c778841c-f9a3-4ec8-83e9-89db721c561d/20x20.png"
                                                            style="
                                                              height: 20px;
                                                              width: 20px;
                                                            "
                                                            height="20"
                                                            width="20"
                                                          />
                                                        </a>
                                                      </td>
                                                      <td
                                                        style="padding: 0px 5px"
                                                        class="social-icon-column"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="https://www.instagram.com/sendgrid/"
                                                          target="_blank"
                                                          alt="Instagram"
                                                          title="Instagram"
                                                          style="
                                                            display: inline-block;
                                                            height: 20px;
                                                            width: 20px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Instagram"
                                                            title="Instagram"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/32511bac4be7de49/998fa750-1651-4855-9e18-50751e1d50ef/20x20.png"
                                                            style="
                                                              height: 20px;
                                                              width: 20px;
                                                            "
                                                            height="20"
                                                            width="20"
                                                          />
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>
`;

sgMail.setApiKey(
  API_KEY
);

const msg = {
  // to: "hugo.rogers.16@gmail.com",
  to: "oliver.b25.f@gmail.com",
  from: "support@trustle-beta.com",
  subject: "Trustle",
  html: htmlEmail,
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent successfully");
  })
  .catch((error: any) => {
    console.error("Error sending email", error);
  });
