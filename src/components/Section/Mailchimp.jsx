import React from 'react'
import PropTypes from 'prop-types'

const Mailchimp = ({ children, ...props }) => (
  <div {...props}>
    {children}
    <div id="mc_embed_signup">
      <form
        action="https://artsbeacon.us19.list-manage.com/subscribe/post?u=0617ea9ef41ff7cdcb4208f7f&amp;id=70cbd7d827"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group input-group">
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email form-control"
              size="50"
              id="mce-EMAIL"
              placeholder="Email Address"
            />
            <div className="input-group-btn">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn btn-danger"
              />
            </div>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_0617ea9ef41ff7cdcb4208f7f_70cbd7d827" tabIndex="-1" defaultValue="" />
          </div>
        </div>
      </form>
    </div>
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
    <script type="text/javascript">{`
    (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0] = 'EMAIL';
      ftypes[0] = 'email';
      fnames[1] = 'FNAME';
      ftypes[1] = 'text';
      fnames[2] = 'LNAME';
      ftypes[2] = 'text';
      fnames[3] = 'ADDRESS';
      ftypes[3] = 'address';
      fnames[4] = 'PHONE';
      ftypes[4] = 'phone';
      fnames[5] = 'BIRTHDAY';
      ftypes[5] = 'birthday';
    }(jQuery));
    var $mcj = jQuery.noConflict(true);
    `}</script>
  </div>
)

export default Mailchimp

Mailchimp.propTypes = {
  children: PropTypes.node,
}

Mailchimp.defaultProps = {
  children: 'Sign up for our mailing list.',
}
