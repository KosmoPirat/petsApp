import { h } from 'preact';

const SocialMedia = () => (
    <>
        <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js" />
        <script src="https://yastatic.net/share2/share.js" />
        <div
            className="ya-share2"
            data-services="vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,skype,telegram"
        />
    </>
);

export default SocialMedia;
