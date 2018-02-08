package com.contact.util;

public class JsUtils {

	public static String base64() {
		return "var base64EncodeChars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\";\n" + //
				"var base64DecodeChars = new Array(\n" + //
				"　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,\n" + //
				"　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,\n" + //
				"　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,\n" + //
				"　　52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,\n" + //
				"　　-1,　0,　1,　2,　3,  4,　5,　6,　7,　8,　9, 10, 11, 12, 13, 14,\n" + //
				"　　15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,\n" + //
				"　　-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n" + //
				"　　41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);\n" + //
				"\n" + //
				"\n" + //
				"function base64encode(str) {\n" + //
				"　　var out, i, len;\n" + //
				"　　var c1, c2, c3;\n" + //
				"　　len = str.length;\n" + //
				"　　i = 0;\n" + //
				"　　out = \"\";\n" + //
				"　　while(i < len) {\n" + //
				"			 c1 = str.charCodeAt(i++) & 0xff;\n" + //
				"			 if(i == len)\n" + //
				"			 {\n" + //
				"			　　 out += base64EncodeChars.charAt(c1 >> 2);\n" + //
				"			　　 out += base64EncodeChars.charAt((c1 & 0x3) << 4);\n" + //
				"			　　 out += \"==\";\n" + //
				"			　　 break;\n" + //
				"			 }\n" + //
				"			 c2 = str.charCodeAt(i++);\n" + //
				"			 if(i == len)\n" + //
				"			 {\n" + //
				"			　　 out += base64EncodeChars.charAt(c1 >> 2);\n" + //
				"			　　 out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));\n" + //
				"			　　 out += base64EncodeChars.charAt((c2 & 0xF) << 2);\n" + //
				"			　　 out += \"=\";\n" + //
				"			　　 break;\n" + //
				"			 }\n" + //
				"			 c3 = str.charCodeAt(i++);\n" + //
				"			 out += base64EncodeChars.charAt(c1 >> 2);\n" + //
				"			 out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));\n" + //
				"			 out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));\n" + //
				"			 out += base64EncodeChars.charAt(c3 & 0x3F);\n" + //
				"　}\n" + //
				"　return out;\n" + //
				"};";
	}

	public static String utf16to8() {
		return "function utf16to8(str) {\n" + //
				"　　var out, i, len, c;\n" + //
				"　　out = \"\";\n" + //
				"　　len = str.length;\n" + //
				"　　for(i = 0; i < len; i++) {\n" + //
				"			 c = str.charCodeAt(i);\n" + //
				"			 if ((c >= 0x0001) && (c <= 0x007F)) {\n" + //
				"			　　 out += str.charAt(i);\n" + //
				"			 } else if (c > 0x07FF) {\n" + //
				"			　　 out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));\n" + //
				"			　　 out += String.fromCharCode(0x80 | ((c >>　6) & 0x3F));\n" + //
				"			　　 out += String.fromCharCode(0x80 | ((c >>　0) & 0x3F));\n" + //
				"			 } else {\n" + //
				"			　　 out += String.fromCharCode(0xC0 | ((c >>　6) & 0x1F));\n" + //
				"			　　 out += String.fromCharCode(0x80 | ((c >>　0) & 0x3F));\n" + //
				"			 }\n" + //
				"　　}\n" + //
				"　　return out;\n" + //
				"}";
	}

}
