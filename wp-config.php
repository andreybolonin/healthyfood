<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'healthyfood');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'JbBDmuMMpW1pNKunYkUVdtyF');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2.kBl(Dsd8zE*K_e>=oQKVhG!=4/H!pgR}_FQ*j_>heeQ^Y,Sdq&[9FBx y _zy?');
define('SECURE_AUTH_KEY',  'iJ.J8+X~peEg>;E)~`vVHCShCDxpX{J1i>JDd%g%I!;Tnb0~?L+w1v6LF^?rgCK6');
define('LOGGED_IN_KEY',    'Iw<4>v[U,7<88m:,qE<N#5)1:CCL*q*1W&oIxv+*a;[eq/zrd]}6i^yK{+ei{jYg');
define('NONCE_KEY',        'oVMm{iQj jz]/a[C`)hINr>&w+DU[A6{A!sSfZ1|3NqR#$#^:j#tQ;NaOcfiw5hp');
define('AUTH_SALT',        '{##D.tI=xXb_:ZM$lojvIKDXVZ7F&+htokF-X+{_`Be+7+kWyI qTl&WfQ<u<MKJ');
define('SECURE_AUTH_SALT', 'u`l|+;N7N?5js}5NcwQ{6&Qbop9Haa|flW($]d4N{s!=v,Lrzi HHbEt((_O$>)&');
define('LOGGED_IN_SALT',   '#2_B&=~8|Nd@5]$ub4tE!cJXHm9Gbfl[(B@R)Qpk*Z)<G!lCx;-7Tt69+F:!8a&T');
define('NONCE_SALT',       '?FX0Yf`n{6HzQ9-g8hXHAKi`*_c,1D#A[:W!S.EKRAY}t.Pr#MG++R!%m?|`TEA#');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD', 'direct');
