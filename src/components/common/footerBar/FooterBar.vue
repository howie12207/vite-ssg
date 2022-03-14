<template>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_contact">
                <div class="contact_left">
                    <a href="http://www.franklin.com.tw/" target="_blank" title="富蘭克林證券投顧">
                        <img class="logo" src="./img/logo.png" alt="富蘭克林證券投顧" />
                    </a>
                    <div class="company_name">富蘭克林證券投資顧問(股)公司</div>
                    <div class="id_code">
                        101年金管投顧新字第025號 | 富蘭克林證券投顧獨立經營管理
                    </div>
                </div>
                <div class="contact_right">
                    <div class="contact_icon">
                        <a
                            href="https://www.facebook.com/franklin.taiwan/"
                            target="_blank"
                            title="粉絲團"
                            class="icon_link"
                        >
                            <FAIcon class="icon" :icon="['fab', 'facebook-square']" />
                        </a>
                        <a
                            href="http://line.naver.jp/ti/p/%40franklin"
                            target="_blank"
                            title="Line"
                            class="icon_link"
                        >
                            <FAIcon class="icon" :icon="['fab', 'line']" />
                        </a>
                        <a
                            href="https://www.youtube.com/user/franklin0800885888"
                            target="_blank"
                            title="youtube"
                            class="icon_link"
                        >
                            <FAIcon class="icon" :icon="['fab', 'youtube-square']" />
                        </a>
                    </div>
                    <div class="contact_service">
                        國民理財專線：
                        <a class="phone_link" href="tel:0800-885-888" title="國民理財專線"
                            >0800-885-888</a
                        >
                    </div>
                    <div class="contact_address">106台北市大安區忠孝東路四段87號8樓</div>
                    <div class="contact_phone">電話: (02)2781-0088 傳真: (02)2781-7788</div>
                </div>
            </div>
            <div class="footer_desc">
                <p class="desc_content">
                    本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。
                </p>
                <p class="desc_content">
                    本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。
                </p>
                <p class="desc_content">
                    投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a
                        href="https://www.fundclear.com.tw/"
                        target="_blank"
                        class="link"
                        >https://www.fundclear.com.tw/</a
                    >)下載，或逕向本公司網站(<a
                        href="https://www.franklin.com.tw/"
                        target="_blank"
                        class="link"
                        >https://www.franklin.com.tw/</a
                    >)查閱。
                </p>
            </div>
            <div class="footer_copyright">
                <span class="copyright_text"
                    >版權所有富蘭克林證券投顧 FRANKLIN TEMPLETON INVESTMENTS</span
                >
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@mixin size-md {
    @media (min-width: 768px) {
        @content;
    }
}

* {
    box-sizing: border-box;
}

.footer {
    --container-width: 1280px;
    --container-padding: max(calc((100% - var(--container-width)) / 2), 16px);
    --color-main: #005598;

    background: var(--color-main);
    color: #fff;

    .footer_container {
        padding: 32px var(--container-padding);
        line-height: 1.6;
        letter-spacing: 1.2px;
    }

    .footer_contact {
        font-size: 14px;
        text-align: center;
        @include size-md {
            display: flex;
            justify-content: space-between;
            text-align: initial;
        }

        .contact_right {
            @include size-md {
                text-align: right;
            }
        }

        .logo {
            width: 160px;
            margin: 0 auto 16px;
            @include size-md {
                width: 196px;
                margin: 0 0 16px;
            }
        }

        .company_name {
            font-size: 18px;
            font-weight: bold;
            margin: 8px 0;
        }

        .id_code {
            font-weight: bold;
            margin: 8px 0;
        }

        .contact_icon {
            display: flex;
            justify-content: center;
            gap: 8px;
            @include size-md {
                justify-content: flex-end;
            }

            .icon_link,
            .icon {
                height: 32px;
                transition: 0.3s;

                &:hover {
                    opacity: 0.8;
                }
            }
        }

        .contact_service {
            font-weight: bold;
            margin: 8px 0;

            .phone_link {
                font-size: 24px;
                color: #fff;
            }
        }
    }

    .footer_desc {
        font-weight: bold;
        position: relative;
        margin-top: 16px;
        padding-top: 16px;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
        }

        .desc_content {
            margin-bottom: 24px;
        }

        .link {
            text-decoration: underline;
        }
    }

    .footer_copyright {
        text-align: center;

        .copyright_text {
            font-size: 12px;
            display: inline-block;
            padding: 8px;
            margin-top: 16px;
            border: 1px solid #fff;
        }
    }
}
</style>
