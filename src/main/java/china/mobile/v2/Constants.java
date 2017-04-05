package china.mobile.v2;

public class Constants {
	public final static  int NEEDLOGIN = 0;
	public final static  int NEEDCODE = 1;
	public final static  int AREADYLOGIN = 2;
	public final static  int CODEERROR = 3;
	public final static  int INPROCESS = 4;
	public final static  int SUCCESS = 200;
	
	public static String getMessage(int key){
		switch (key) {
		case NEEDLOGIN:
			return "please login";
		case NEEDCODE:
			return "please refresh code and login angin";
		case SUCCESS:
			return "success";
		case AREADYLOGIN:
			return "aready login";
		case CODEERROR:
			return "code error";
		case INPROCESS:
			return "in process";
		default:
			break;
		}
		return "";
	}
	
}
