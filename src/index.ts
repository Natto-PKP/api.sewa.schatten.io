import { Server } from './server';

const PORT = process.env.PORT || 3000;

(async () => {
  Server.listen(PORT, () => console.log(`here : http://localhost:${PORT}`));
})();
