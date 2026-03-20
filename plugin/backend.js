/* ============================================
   PLUGIN TEMPLATE - Backend
   Remplacer 'micro-solidaire-network' par l'ID du plugin
   ============================================ */

module.exports = {
  register(context) {
    const { router, prefix, pluginDir, services, manifest } = context;

    // Route exemple : GET /api/plugins/micro-solidaire-network/hello
    router.add('GET', `${prefix}/hello`, (req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Hello depuis micro-solidaire-network!' }));
    });

    // Route exemple avec auth : GET /api/plugins/micro-solidaire-network/data
    router.add('GET', `${prefix}/data`, (req, res) => {
      const auth = services.get('auth');
      const user = auth?.getCurrentUser(req);

      if (!user) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end('{"error":"Non authentifie"}');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        user: user.username,
        pluginId: manifest.id
      }));
    });

    console.log(`[${manifest.name}] Backend charge`);
  },

  unregister() {
    console.log('[MicroSolidaireNetwork] Backend decharge');
  }
};
