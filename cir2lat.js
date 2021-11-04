function lat2cir() {
	var result = obrnutniz(document.getElementById("lat").innerHTML);
    document.getElementById("cir").innerHTML = result;
}

function obrnutniz(nizteksta) {
	nizteksta = nizteksta.replace("dž", "x");
	nizteksta = nizteksta.replace("dz", "x");
	nizteksta = nizteksta.replace("Dž", "Џ");
	nizteksta = nizteksta.replace("Dz", "Џ");
	nizteksta = nizteksta.replace("DŽ", "Џ");
	nizteksta = nizteksta.replace("DZ", "Џ");
	nizteksta = nizteksta.replace("nj", "w");
	nizteksta = nizteksta.replace("Nj", "W");
	nizteksta = nizteksta.replace("NJ", "W");
	nizteksta = nizteksta.replace("dj", "ђ");	
	nizteksta = nizteksta.replace("Dj", "Ђ");	
	nizteksta = nizteksta.replace("DJ", "Ђ");	
	nizteksta = nizteksta.replace("lj", "љ");	
	nizteksta = nizteksta.replace("Lj", "Љ");		
	nizteksta = nizteksta.replace("LJ", "Љ");	
var result = "";
	for (var i = 0; i <= nizteksta.length; ++i) {
		nizteksta = nizteksta.replace("dž", "x");
		nizteksta = nizteksta.replace("dz", "x");
		nizteksta = nizteksta.replace("Dž", "Џ");
		nizteksta = nizteksta.replace("Dz", "Џ");
		nizteksta = nizteksta.replace("DŽ", "Џ");
		nizteksta = nizteksta.replace("DZ", "Џ");
		nizteksta = nizteksta.replace("nj", "w");
		nizteksta = nizteksta.replace("Nj", "W");
		nizteksta = nizteksta.replace("NJ", "W");
		nizteksta = nizteksta.replace("dj", "ђ");	
		nizteksta = nizteksta.replace("Dj", "Ђ");	
		nizteksta = nizteksta.replace("DJ", "Ђ");	
		nizteksta = nizteksta.replace("lj", "љ");	
		nizteksta = nizteksta.replace("Lj", "Љ");		
		nizteksta = nizteksta.replace("LJ", "Љ");	

	result += obrnuto(nizteksta.charAt(i))
	}
	return result;
}

function obrnuto(c) {
	if (c == 'a') {
		return 'а'
	}
	else if (c == 'x') {
		return 'џ'
	}
	else if (c == 'š') {
		return 'ш'
	}
	else if (c == 'đ') {
		return 'ђ'
	}
	else if (c == 'č') {
		return 'ч'
	}
	else if (c == 'ć') {
		return 'ћ'
	}
	else if (c == 'ž') {
		return 'ж'
	}
	else if (c == 'w') {
		return 'њ'
	}
	else if (c == 'W') {
		return 'Њ'
	}
	else if (c == 'b') {
		return 'б'
	}
	else if (c == 'c') {
		return 'ц'  
	}
	else if (c == 'd') {
		return 'д'
	}
	else if (c == 'e') {
		return 'е'
	}
	else if (c == 'f') {
		return 'ф' 
	}
	else if (c == 'g') {
		return 'г'
	}
	else if (c == 'h') {
		return 'х'
	}
	else if (c == 'i') {
		return 'и' 
	}
	else if (c == 'j') {
		return 'ј'
	}
	else if (c == 'k') {
		return 'к'
	}
	else if (c == 'l') {
		return 'л'
	}
	else if (c == 'm') {
		return 'м'
	}
	else if (c == 'n') {
		return 'н'
	}
	else if (c == 'o') {
		return 'о'
	}
	else if (c == 'p') {
		return 'п'
	}
	else if (c == 'r') {
		return 'р'
	}
	else if (c == 's') {
		return 'с'
	}
	else if (c == 't') {
		return 'т'
	}
	else if (c == 'u') {
		return 'у'
	}
	else if (c == 'v') {
		return 'в'
	}
	else if (c == 'z') {
		return 'з'
	}
	else if (c == 'A') {
		return 'А'
	}
	else if (c == 'Š') {
		return 'Ш'
	}
	else if (c == 'Đ') {
		return 'Ђ'
	}
	else if (c == 'Č') {
		return 'Ч'
	}
	else if (c == 'Ć') {
		return 'Ћ'
	}
	else if (c == 'Ž') {
		return 'Ж'
	}
	else if (c == 'B') {
		return 'Б'
	}
	else if (c == 'C') {
		return 'Ц'  
	}
	else if (c == 'D') {
		return 'Д'
	}
	else if (c == 'E') {
		return 'Е'
	}
	else if (c == 'F') {
		return 'Ф' 
	}
	else if (c == 'G') {
		return 'Г'
	}
	else if (c == 'H') {
		return 'Х'
	}
	else if (c == 'I') {
		return 'И' 
	}
	else if (c == 'J') {
		return 'Ј'
	}
	else if (c == 'K') {
		return 'К'
	}
	else if (c == 'L') {
		return 'Л'
	}
	else if (c == 'M') {
		return 'М'
	}
	else if (c == 'N') {
		return 'Н'
	}
	else if (c == 'O') {
		return 'О'
	}
	else if (c == 'P') {
		return 'П'
	}
	else if (c == 'R') {
		return 'Р'
	}
	else if (c == 'S') {
		return 'С'
	}
	else if (c == 'T') {
		return 'Т'
	}
	else if (c == 'U') {
		return 'У'
	}
	else if (c == 'V') {
		return 'В'
	}
	else if (c == 'Z') {
		return 'З'
	}
	return c;
}



