<!--
	Author       : Ridho Reynaldo
    Organization : Universitas Islam Negeri Sumatera Utara
	Date	     : 24 April 2022
	Resource     : Github https://github.com/ridhoreynaldo
    Instagram    : instagram.com/ridho_reynaldo
	Note	     : Ini Dibuat dengan Algoritma Cryptography DES-ECB(Electronic Codebook)
                    Menggunakan Fungsi DES Manual Dan Otomatis(openssl).
                    Silahkan Eksplorasi.
                    Perhitungan Manual dan BAB IV Silahkan Hubungi Instagram
-->
<html>

<head>
    <title>Cryptography File DES-ECB</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/kedipjam.css">
    <link rel="stylesheet" type="text/css" href="css/kedipterminal.css">
    <link rel="stylesheet" type="text/css" href="css/bgandterminal.css">
    <link rel="stylesheet" type="text/css" href="css/blur.css">
    <script src="js/terminal.js"></script>
</head>

<body>
    <div class="bg-image"></div>
    <div class="bg-text">

        <!--text terminal-->
        <div id="wrapper">
            <div class="box">
                <span class="prefix">
                    <div id="console">
                        <div id="message">
                            <h1>
                                <center>Cryptography File(DES)<span class="a">_</span></center>
                            </h1>
                        </div>

                        Mode ECB(Electronic Codebook)<br>
                        Rumus Y<sub>i</sub> = F(PlainText<sub>i</sub>, Key)<br>
                        <br>

                        <form method="POST" action="" enctype="multipart/form-data">
                            <font color="#00ff9d">

                                <div class="form-group row">
                                    <div class="col-xs-8">
                                        Pilih File
                                        <input type="file" class="form-control-file" name="pdf"></br>
                                        Kunci :<br><input type="text" name="kunci" style="width:200px;">
                                        <br><br>
                                    </div>
                                </div>
                            </font>

                            <input type="submit" name="enkripsi" class="btn btn-danger" value="Encrypt">
                            <input type="submit" name="dekripsi" class="btn btn-success" value="Decrypt">
                        </form>

                        <?php
error_reporting(0);
include 'DES.php';
function enkripsiDES($plainpdf, $key, &$ivchiper) {
    $enkripsi = openssl_encrypt($plainpdf, 'DES-ECB', $key, 0); // OPSI 0 LEBIH DARI 8 DIGIT ASCII
    return $enkripsi.'::'.$ivchiper;//RETURN BASE64 AGAR TIDAK MERUSAK RAW DATA
}
function dekripsiDES($chiperpdf, $key, &$ivplain) {
  list($dekripsi, $ivplain) = explode('::', $chiperpdf, 2);
  return openssl_decrypt($dekripsi, 'DES-ECB', $key, 0);
}  
function asciitobin($input,&$biner,&$hexa){
    $k = strlen($input);
    while ($k--) {
    $hexa = str_pad(dechex(ord($input[$k])), 2, "0", STR_PAD_LEFT) . '' . $hexa;
    $biner = str_pad(decbin(ord($input[$k])), 8, "0", STR_PAD_LEFT) . '' . $biner;
    }
}

if(isset($_POST['enkripsi'])){
    $kunci = $_POST['kunci'];
    $iv = $_POST['iv'];
    $pdf = $_FILES['pdf']['name'];           //MENGAMBIL NAMA FILE PDF
    $ins = $_FILES['pdf']['size'];
    $tmp = $_FILES['pdf']['tmp_name'];
    $ekstensi = explode(".", $pdf);
    $ekstensi1 = ".".$ekstensi[1];      //MENGAMBIL EKSTENSI FILE
    $pdfbaru = "enkripsi".date('is').$ekstensi1; //RENAME FILE UNTUK MEMPERMUDAH WRITE DATA
    $pdfobj = file_get_contents($tmp);  //FILE RAW/OBJECT YANG AKAN DI ENKRIP OPENSSL
    $plain = openssl_random_pseudo_bytes(8);  //ALGORITMA RANDOM PRNG  

    if(strlen($kunci) == 8){
        $key = $kunci;                              //KUNCI ASCII/STRING
        asciitobin($plain,$binerplain,$heksaplain); //MENGUBAH IV KE HEKSA
        asciitobin($key,$binerkunci,$heksakunci);   //MENGUBAH KUNCI KE HEKSA

        $des  = new DataEncryptionStandard();       //FUNGSI DES MANUAL
        $res  = $des->encrypt($plain, $key);        //ENKRIPSI IV MENGHASILKAN HEKSA
        $ivchiper = hex2bin($res);                  //MENGUBAH IV KE ASCII/STRING

        echo "=================INPUT=================<br>";
        echo "Plain ASCII Inisialisasi Pdf = ".$plain."<br>";
        echo "Plain Heksa Inisialisasi Pdf = ".$heksaplain."<br>";
        echo "Plain ASCII Kunci = ".$key."<br>";
        echo "Plain Heksa Kunci = ".$heksakunci."<br>";
        echo "=======================================<br><br>";

        echo "================OUTPUT===============<br>";
        echo "Chiper ASCII Inisialisasi Pdf = ".$ivchiper."<br>";
        asciitobin($ivchiper,$binerchiper,$heksachiper);    //MENGUBAH IV CHIPER KE HEKSA
        echo "Chiper Heksa Inisialisasi Pdf = ".$heksachiper."<br>";
        echo "=======================================<br><br>";
        
        $msg_encrypted = enkripsiDES($pdfobj, $key, $ivchiper);
        $file = fopen("./file/$pdfbaru", 'wb');
        fwrite($file, $msg_encrypted);
        fclose($file);
        echo "=================== Log ===============<br>";
        $des->showLog();
    }
    else{
        echo '<script language="javascript">';
        echo "alert('Kunci Harus Berjumlah 8');window.location='index.php';";
        echo '</script>';
    }
}

else if(isset($_POST['dekripsi'])){
    $kunci = $_POST['kunci'];
    $pdf = $_FILES['pdf']['name'];           //MENGAMBIL NAMA FILE PDF
    $tmp = $_FILES['pdf']['tmp_name'];
    $ekstensi = explode(".", $pdf);
    $ekstensi1 = ".".$ekstensi[1];      //MENGAMBIL EKSTENSI FILE
    $pdfbaru = "dekripsi".date('is').$ekstensi1; //RENAME FILE UNTUK MEMPERMUDAH WRITE DATA
    $pdfobj = file_get_contents($tmp);  //FILE RAW/OBJECT YANG AKAN DI ENKRIP OPENSSL

    if(strlen($kunci) == 8){
        $msg_encrypted = dekripsiDES($pdfobj, $kunci, $iv);
        $plain = $iv;
        $key = $kunci;                              //KUNCI ASCII/STRING
        asciitobin($plain,$binerplain,$heksaplain); //MENGUBAH IV KE HEKSA
        asciitobin($key,$binerkunci,$heksakunci);   //MENGUBAH KUNCI KE HEKSA

        $des  = new DataEncryptionStandard();       //FUNGSI DES MANUAL
        $res  = $des->decrypt($plain, $key);        //ENKRIPSI IV MENGHASILKAN HEKSA
        $ivchiper = hex2bin($res);                  //MENGUBAH IV KE ASCII/STRING

        echo "=================INPUT=================<br>";
        echo "Plain ASCII Inisialisasi Pdf = ".$plain."<br>";
        echo "Plain Heksa Inisialisasi Pdf = ".$heksaplain."<br>";
        echo "Plain ASCII Kunci = ".$key."<br>";
        echo "Plain Heksa Kunci = ".$heksakunci."<br>";
        echo "=======================================<br><br>";

        echo "================OUTPUT===============<br>";
        echo "Chiper ASCII Inisialisasi Pdf = ".$ivchiper."<br>";
        asciitobin($ivchiper,$binerchiper,$heksachiper);    //MENGUBAH IV CHIPER KE HEKSA
        echo "Chiper Heksa Inisialisasi Pdf = ".$heksachiper."<br>";
        echo "=======================================<br><br>";
        
        $file = fopen("./file/$pdfbaru", 'wb');
        fwrite($file, $msg_encrypted);
        fclose($file);
        echo "=================== Log ===============<br>";
        $des->showLog();
    }
    else{
        echo '<script language="javascript">';
        echo "alert('Kunci Harus Berjumlah 8');window.location='index.php';";
        echo '</script>';
    }
}
?>
                    </div>
                </span>
            </div>
        </div>
    </div>
</body>

</html>