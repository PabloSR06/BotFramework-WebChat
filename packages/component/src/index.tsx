import BasicWebChat from './BasicWebChat';

import Context from './Context';
import createAdaptiveCardsAttachmentMiddleware from './Middleware/Attachment/adaptiveCard';
import createCoreActivityMiddleware from './Middleware/Activity/core';
import createCoreAttachmentMiddleware from './Middleware/Attachment/core';
import ErrorBox from './ErrorBox';

export default BasicWebChat

export {
  Context,
  createAdaptiveCardsAttachmentMiddleware,
  createCoreActivityMiddleware,
  createCoreAttachmentMiddleware,
  ErrorBox
}

try {
  const { document } = global as any;

  if (typeof document !== 'undefined' && document.createElement && document.head && document.head.appendChild) {
    const meta = document.createElement('meta');
    const params = new URLSearchParams({
      version: '4.0.0'
    } as any);

    meta.setAttribute('name', 'botframework-webchat');
    meta.setAttribute('content', params.toString());

    document.head.appendChild(meta);
  }
} catch (err) {}