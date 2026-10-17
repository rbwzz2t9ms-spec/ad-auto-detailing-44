AD AUTO DETAILING 44 — SITE WEB
================================

Fichiers :
- index.html : contenu du site
- styles.css : design responsive
- script.js : bouton de langue FR/RU et année du footer
- assets/ : vos photos de réalisations et votre logo personnalisé sont déjà intégrés

AVANT PUBLICATION
1. Ouvrez index.html dans un navigateur pour prévisualiser le site.
2. Remplacez les blocs de galerie par vos vraies photos. Le site est préparé avec des emplacements, car votre logo et vos photos seront ajoutés après réception.
3. Vérifiez les tarifs et coordonnées avant publication. Les prix indiqués sont des prix « à partir de » basés sur les informations disponibles.
4. Pour remplacer les blocs photos, vous pouvez utiliser par exemple :
   <img src="assets/photo-avant-apres.jpg" alt="Nettoyage intérieur avant et après">
   Ajoutez ensuite les règles CSS suivantes dans styles.css :
   .gallery-slot img { width:100%; height:100%; object-fit:cover; position:absolute; inset:0; }
   .gallery-slot span, .gallery-slot small { position:relative; z-index:1; background:#111b; padding:5px 8px; }
   Pour le visuel principal, remplacez le contenu de .hero-visual par une balise img ou appliquez une image de fond CSS.

PUBLICATION GRATUITE AVEC GITHUB PAGES
1. Créez un compte sur https://github.com/ si vous n'en avez pas.
2. Créez un nouveau dépôt public, par exemple ad-auto-detailing-44.
3. Téléversez index.html, styles.css, script.js et le dossier assets.
4. Dans le dépôt, ouvrez Settings > Pages.
5. Dans Build and deployment, choisissez Deploy from a branch, puis main et / (root), et enregistrez.
6. Attendez quelques minutes. GitHub affichera l'adresse gratuite du site, généralement https://VOTRE-NOM.github.io/ad-auto-detailing-44/
Aucun abonnement mensuel ni achat de domaine n'est nécessaire pour cette adresse GitHub Pages.

À SAVOIR
- Le site utilise Google Fonts via internet ; si elles ne chargent pas, les polices de secours s'afficheront.
- Les boutons WhatsApp, Instagram et email sont déjà configurés.
- Aucun formulaire ne collecte les données : les demandes passent par WhatsApp, téléphone ou email.
- Le site n'est pas encore en ligne tant que vous n'avez pas fait l'étape de publication.
