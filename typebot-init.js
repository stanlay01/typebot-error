export async function initializeTypebot(botUrl, typebotLink, vars = {}, id, visitorId) {
  const { default: Typebot } = await import(
    'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.86/dist/web.js'
  );

  Typebot.initStandard({
    id,
    visitorId,
    typebot: typebotLink,
    apiHost: botUrl,
    prefilledVariables: vars,
    rememberUser: false,
  });

  return Typebot;
}