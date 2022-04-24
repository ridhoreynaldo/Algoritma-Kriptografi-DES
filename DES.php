<?php 

class DataEncryptionStandard {
	private $show_log = true;
	private $log = array();
	private $k   = array();
	private $PC1 = array(57,	49,		41,		33,		25,		17,		9,
						  1,    58, 	50,		42,		34,     26,    18,
						 10,     2,     59,		51,     43,     35,    27,
						 19,    11,      3,     60,    	52,	    44,    36,		
						 63,    55,    	47,    	39,     31,    	23,    15,		 
						  7,    62,    	54,    	46,    	38,     30,    22,		
						 14,     6,     61,    	53,    	45,     37,    29,	
						 21,    13,      5,     28,     20,     12,     4);

	private $PC2 = array(14,    17,   	11,     24,      1,      5,	   
						  3,    28,   	15,      6,     21,     10,		
						 23,    19,     12,      4,     26,      8,		
						 16,     7,   	27,     20,     13,      2,
						 41,    52,   	31,     37,     47,     55, 	  
						 30,    40,		51,     45,     33,     48,		
						 44,    49,     39,     56,     34,     53,	    
						 46,    42,   	50,     36,     29,     32);

	private $IP  = array(58, 	50, 	42, 	34, 	26,    	18, 	10,		 2,
						 60, 	52, 	44, 	36, 	28,    	20, 	12, 	 4,
						 62, 	54, 	46, 	38, 	30,    	22, 	14, 	 6,
						 64, 	56, 	48, 	40, 	32,    	24, 	16, 	 8,
						 57, 	49, 	41, 	33, 	25,    	17,      9, 	 1,
						 59, 	51, 	43, 	35, 	27,    	19,    	11,  	 3,
						 61, 	53, 	45, 	37, 	29,    	21,    	13,  	 5,
						 63, 	55, 	47, 	39, 	31,    	23,    	15,  	 7);
	
	private $IP1 = array(40,	 8,		48,		16,		56,	   	24,	  	64,	 	32,	
						 39,	 7,		47,		15,		55,	   	23,	  	63,	 	31,
						 38,	 6,		46,		14,		54,	   	22,	  	62,	 	30,	
						 37,	 5,		45,		13,		53,	   	21,	  	61,	 	29,
						 36,	 4,		44,		12,		52,	   	20,	  	60,	 	28,	
						 35,	 3,		43,		11,		51,	   	19,	  	59,	 	27,
						 34,	 2,		42,		10,		50,	   	18,	  	58,		26,	
						 33,	 1,		41,	 	 9, 	49,	   	17,	  	57,	 	25);
	
	private $E   = array(32,  	 1,  	 2,  	 3,  	 4,  	 5,	   
						  4,  	 5,		 6, 	 7,  	 8,  	 9,		 
						  8,  	 9, 	10,	   	11, 	12, 	13,		
						 12,    13,		14,    	15, 	16,		17,
						 16, 	17, 	18,     19, 	20,    	21,
						 20, 	21, 	22, 	23, 	24,     25, 		
						 24,    25, 	26, 	27, 	28, 	29, 	
						 28,    29, 	30,    	31, 	32, 	 1);

	private	$P   = array(16,	 7,		20,	   	21,		
						 29,	12,	  	28,	 	17,
						  1,	15,		23,	   	26,	 	 
						  5,	18,	  	31,	 	10,
						  2,	 8,		24,	   	14,	 	
						 32,	27,	   	 3,	  	 9,
						 19,	13,		30,	     6,		
						 22,	11,	     4,	 	25);
					
	Private $r   = array( 1  => 1, 	
						  2  => 1, 	
						  3  => 2, 	
						  4  => 2, 	
						  5  => 2, 	
						  6  => 2,  	
						  7  => 2, 	
						  8  => 2,
						  9  => 1, 	
						  10 => 2, 	
						  11 => 2, 	
						  12 => 2, 	
						  13 => 2, 	
						  14 => 2, 	
						  15 => 2, 	
						  16 => 1);
	
	private function leftShift($keyPC1) {
		return substr($keyPC1, 1, (strlen($keyPC1) - 1)) . substr($keyPC1, 0, 1);
	}

	private function permutation($array, $data) {
		$rs = '';
		foreach($array as $index) {
			$rs .= $data[$index-1];
		}
		return $rs;
	}

	private function dataXOR($data1, $data2) {
		if(strlen($data1) != strlen($data2)) exit('xor err');

		$rs = '';
		for($i = 0; $i < strlen($data1); $i++) {
			if(($data1[$i] == '1' or $data2[$i] == '1') and ($data1[$i] == '0' or $data2[$i] == '0')) $logic = '1';
			else $logic = '0';
			$rs .= $logic;
		}
		return $rs;
	}

	private function sbox($EL) {
		$S = array(
				array(
					array(14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7),
					array(0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8),
					array(4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0),
					array(15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13),
				),
				array(
					array(15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10),
					array(3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5),
					array(0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15),
					array(13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9),
				),
				array(
					array(10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8),
					array(13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1),
					array(13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7),
					array(1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12),
				),
				array(
					array(7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15),
					array(13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9),
					array(10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4),
					array(3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14),
				),
				array(
					array(2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9),
					array(14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6),
					array(4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14),
					array(11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3),
				),
				array(
					array(12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11),
					array(10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8),
					array(9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6),
					array(4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13),
				),
				array(
					array(4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1),
					array(13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6),
					array(1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2),
					array(6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12),
				),
				array(
					array(13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7),
					array(1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2),
					array(7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8),
					array(2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11),
				),
			);
			
		$BI = array();
		$it = 0;
		for($i = 0; $i < 8; $i++){
			$row = substr($EL, $it, 6);
			
			$a = base_convert($row[0].$row[5], 2, 10);
			$b = base_convert(substr($row, 1, 4), 2, 10);
			
			$BICurrent = base_convert($S[$i][$a][$b], 10, 2);
			
			$BI[$i] = (strlen($BICurrent) < 4)? str_pad($BICurrent, 4, "0", STR_PAD_LEFT) : $BICurrent;
			$it += 6;
		}

		return implode('', $BI);
	}

	private function stringToHexToBin($key) {
		$binKey = '';
		for($i = 0; $i < strlen($key); $i++) {
			$num = ord($key[$i]);
			$bin = base_convert($num, 10, 2);
			if(strlen($bin) < 8) $bin = str_pad($bin, 8, "0", STR_PAD_LEFT);
			
			$binKey .= $bin;
		}
		return $binKey;
	}

	private function stringToHex ($s) {
		$r = "";
		$hexes = array ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
		for ($i = 0; $i < strlen($s); $i++) {
			$r .= ($hexes [(ord($s[$i]) >> 4)] . $hexes [(ord($s[$i]) & 0xf)]);
		}
		return $r;
	}
	
	private function hexToBin($hex){
		$bin="";
		for ($i = 0; $i < strlen($hex); $i++){
			switch($hex[$i]){
				case "0" : $bin .= "0000"; break;
				case "1" : $bin .= "0001"; break;
				case "2" : $bin .= "0010"; break;
				case "3" : $bin .= "0011"; break;
				case "4" : $bin .= "0100"; break;
				case "5" : $bin .= "0101"; break;
				case "6" : $bin .= "0110"; break;
				case "7" : $bin .= "0111"; break;
				case "8" : $bin .= "1000"; break;
				case "9" : $bin .= "1001"; break;
				case "A" : $bin .= "1010"; break;
				case "B" : $bin .= "1011"; break;
				case "C" : $bin .= "1100"; break;
				case "D" : $bin .= "1101"; break;
				case "E" : $bin .= "1110"; break;
				case "F" : $bin .= "1111"; break;
			}
		}
		return $bin;
	}	
	
	private function generateKey($key){
		// Step 1 : Create 16 Subkeys
		$this->log['key']['key'] = $key;
		$this->log['key']['hexKey'] = $this->stringToHex($key); // string key to hex
		$binKey = $this->log['key']['binKey'] = $this->stringToHexToBin($key); // string key to hex then to binary

		$keyPC1 = '';
		foreach($this->PC1 as $index) {
			// given K is permuted according to PC-1
			$this->log['key']['keyPermutation (K+)'] = $keyPC1 .= $binKey[$index-1]; 
		}

		// Step 2 : K+ splitting
		$C[0] = substr($keyPC1, 0, 28);
		$D[0] = substr($keyPC1, 28, 28);
		
		// step 3 : Creating 16 subkeys using shifting
		for($i = 1; $i <= 16; $i++) {
			$shiftC = $C[$i-1];
			$shiftD = $D[$i-1];
			
			for($shiftIndex = 1; $shiftIndex <= $this->r[$i]; $shiftIndex++) {
				$shiftC = $this->leftShift($shiftC); // left shift Cn
				$shiftD = $this->leftShift($shiftD); // left shift Dn
			}
			$C[$i] = $shiftC;
			$D[$i] = $shiftD;
		}

		// step 4 : PC-2 Permutation
		for($i = 1; $i <= 16; $i++) {
			$concat = $C[$i] . $D[$i];

			$this->k[$i] = ''; // Kn (permuted according to the PC-2)
			foreach($this->PC2 as $index) {
				$this->k[$i] .= $concat[$index-1];
			}
		}

		foreach($D as $id => $row) {
			$this->log['key']['C-' . $id] = $C[$id];
			$this->log['key']['D-' . $id] = $D[$id];
			if(isset($this->k[$id])) $this->log['key']['K-' . $id] = $this->k[$id];
		}
	}
	private function generateKeyChiper($key){
		// Step 1 : Create 16 Subkeys
		$this->log['key']['key'] = $key;
		$this->log['key']['hexKey'] = $this->stringToHex($key); // string key to hex
		$binKey = $this->log['key']['binKey'] = $this->stringToHexToBin($key); // string key to hex then to binary

		$keyPC1 = '';
		foreach($this->PC1 as $index) {
			// given K is permuted according to PC-1
			$this->log['key']['keyPermutation (K+)'] = $keyPC1 .= $binKey[$index-1]; 
		}

		// Step 2 : K+ splitting
		$C[0] = substr($keyPC1, 0, 28);
		$D[0] = substr($keyPC1, 28, 28);
		
		// step 3 : Creating 16 subkeys using shifting
		for($i = 1; $i <= 16; $i++) {
			$shiftC = $C[$i-1];
			$shiftD = $D[$i-1];
			
			for($shiftIndex = 1; $shiftIndex <= $this->r[$i]; $shiftIndex++) {
				$shiftC = $this->leftShift($shiftC); // left shift Cn
				$shiftD = $this->leftShift($shiftD); // left shift Dn
			}
			$C[$i] = $shiftC;
			$D[$i] = $shiftD;
			$CC[$i] = $C[$i];
			$DD[$i] = $D[$i];
		}
		for ($j = 16; $j >= 1; $j--){
			$k++;
			$C[$j] = $CC[$k];
			$D[$j] = $DD[$k];
		}
		// step 4 : PC-2 Permutation
		for($i = 1; $i <= 16; $i++) {
			$concat = $C[$i] . $D[$i];

			$this->k[$i] = ''; // Kn (permuted according to the PC-2)
			foreach($this->PC2 as $index) {
				$this->k[$i] .= $concat[$index-1];
			}
		}

		foreach($D as $id => $row) {
			$this->log['key']['C-' . $id] = $C[$id];
			$this->log['key']['D-' . $id] = $D[$id];
			if(isset($this->k[$id])) $this->log['key']['K-' . $id] = $this->k[$id];
		}
	}
	private function encryptMessage($message){
		// Step 1: IP permutation
		$this->log['msg']['message'] = $message;
		$this->log['msg']['hexMsg']  = $this->stringToHex($message);
		$binMsg = $this->log['msg']['binMsg'] = $this->stringToHexToBin($message);
		
		$sourceIP = '';
		foreach($this->IP as $IPIndex) {
			$this->log['msg']['msgIP'] = $sourceIP .= $binMsg[$IPIndex - 1];
		}
		
		// Step 2 : IP splitting
		$L = $R = array();
		$L[0] = $this->log['msg']['L0'] = substr($sourceIP, 0, 32);
		$R[0] = $this->log['msg']['R0'] = substr($sourceIP, 32, 32);
		
		// Step 3 : Iterations
		for($i = 1; $i <= 16; $i++) {
			// set Ln
			$L[$i] = $this->log['msg']['L' . $i] = $R[$i-1];

			// Step 3.1 : E permutation
			$EL = $this->log['msg']['E(R' . ($i - 1) . ')'] = $this->permutation($this->E, $L[$i]);
			
			// Step 3.2 : XOR with a subkey
			$this->log['msg']['K' . $i] = $this->k[$i];
			$this->log['msg']['K' . $i . ' xor E(R' . ($i - 1) . ')'] = $EL = $this->dataXOR($EL, $this->k[$i]);
			
			// Step 3.3 : S box transformation
			$this->log['msg']['S(B1)S(B2)S(B3)S(B4)S(B5)S(B6)S(B7)S(B8) ' . $i] = $s = $this->sbox($EL);
			
			// Step 3.4 : P permutation
			$this->log['msg']['f = P(S(B1)S(B2)S(B3)S(B4)S(B5)S(B6)S(B7)S(B8)) ' . $i] = $f = $this->permutation($this->P, $s);

			// set Rn
			$this->log['msg']['R' . $i] = $R[$i] = $this->dataXOR($L[$i-1], $f);
		}

		// Step 4 : Reverse Connecting
		$this->log['msg']['L16 concat R16'] = $concat = $R[16] . $L[16];

		// Step 5 : IP-1 permutation
		$this->log['msg']['IP-1 permutation'] = $encoded = $this->permutation($this->IP1, $concat);
		$this->log['msg']['result'] = $result = '';
		for($start = 0; $start < strlen($encoded); $start += 4) {
			$this->log['msg']['result'] = $result .= strtoupper(base_convert(substr($encoded, $start, 4), 2, 16));
		}
		
		// result with convert into hex
		return  $result;
	}
	
	public function encrypt($message, $key){
		if(strlen($message) == 8 && strlen($key) == 8) {
			$this->generateKey($key);
			return $this->encryptMessage($message);
		} else {
			echo 'Message & Key lenght must be 8 characters.';
		}
	}
	public function decrypt($message, $key){
		if(strlen($message) == 8 && strlen($key) == 8) {
			$this->generateKeyChiper($key);
			return $this->encryptMessage($message);
		}  else {
			echo 'Message & Key lenght must be 8 characters.';
		}
	}
	public function showLog(){
		echo '<pre>';
		print_r($this->log, false);
		echo '</pre>';
	}
}