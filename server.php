<?
	$name = $_POST['user-name'];
	$phone = $_POST['phone'];
	$street = $_POST['street'];
	$home = $_POST['home'];
	$part = $_POST['part'];
	$appt = $_POST['appt'];
	$floor = $_POST['floor'];
	$pay = $_POST['pay'];

	$callback = $_POST['callback'];
	$callback = isset($callback) ? 'НЕТ' : 'ДА';
	

	$massage = $_['massage'];

	$mail_massage = '
		<html>
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
		</head>
		<body>
			<ul>
				<li>Имя: ' . $name . '</li>
				<li>Телефон: ' . $phone . '</li>
				<li>Улица: ' . $street . '</li>
				<li>Дом: ' . $home . '</li>
				<li>Корпус: ' . $part . '</li>
				<li>Этаж ' . $floor . '</li>
				<li>Квартира: ' . $part . '</li>
				<li>Нужен ли звонок клиенту: ' . $callback . '</li>
			</ul>
		</body>
		</html>';

		$header = "From: Администратор бургерной\r\n" .
		"MIME-Version: 1.0" . "\r\n" .
		"Content-type: text/html; charset=UTF-8" . "\r\n";
		
		$mail = mail('slava91petrushin@yandex.ru', 'Заказ', $mail_massage, $header);
		
		$data = [];

		if ($mail){
			$data['status'] =  "OK";
			$data['mes'] =  "Письмо успешно отправлено";
		} else {
			$data['status'] =  "NO";
			$data['mes'] =  "Письмо не отправлено, ошибка на сервере";
		}
		echo json_encode($data);
?>