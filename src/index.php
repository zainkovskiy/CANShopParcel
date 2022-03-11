<?PHP
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
$userID = CUser::GetID();
$userName = CUser::GetLogin();
?>

<!doctype html>
<html lang="ru">
<head>
<head>
    <SCRIPT>
      // UID Текущего пользователя
      let currentUserId = '<? echo($userID) ;?>';
      // Login текущего пользователя
      let currentUserLogin = '<? echo($userName);?>
    </SCRIPT>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Магазин рекламной продукции</title>
</head>
<body>
<div id="root"></div>

<script type="module" src="./index.jsx"></script>
</body>
</html>