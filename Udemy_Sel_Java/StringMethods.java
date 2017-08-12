
public class StringMethods {

	public static void main(String[] args) {
		String str ="This is the test string";
		String str1 ="Hello";
		String str2 ="Hello";
		String str3 ="Welcome";
		String str4 ="";
		String str5 =" Spaces all around      ";
		String str6 ="Hello";
		
		
		
		System.out.println("str.length():      " + str.length());
		System.out.println("str.charAt(2):   " + str.charAt(2));
		System.out.println("str.concat(' This is the appended string '):   " + str.concat(" This is the appended string "));
		System.out.println("str.contains('is'):   " + str.contains("is"));
		System.out.println("str.contains('si'):   " + str.contains("si"));
		System.out.println("str.startsWith('This'):   " + str.startsWith("This"));
		System.out.println("str.startsWith('is'):   " + str.startsWith("is"));
		System.out.println("str.endsWith('string'):   " + str.endsWith("string"));
		System.out.println("str.endsWith('is'):   " + str.endsWith("is"));
		System.out.println("str:   " + str);
		System.out.println("str1.equals(str2):   " + str1.equals(str2));
		System.out.println("str1.equals(str3):   " + str1.equals(str3));
		System.out.println("str.indexOf('h'):   " + str.indexOf('h'));
		System.out.println("str.indexOf('q'):   " + str.indexOf('q'));
		System.out.println("str.isEmpty():   " + str.isEmpty());
		System.out.println("str4.isEmpty():   " + str4.isEmpty());
		System.out.println("str5.trim():   " + str5.trim());
		System.out.println("str6.replace('e','a'):   " + str6.replace('e','a'));

		System.out.println("str.substring(5):   " + str.substring(5));
		System.out.println("str.substring(5,10):   " + str.substring(5,10));
		char[] charArray = str.toCharArray();
		for(int i =0; i<charArray.length;i++) {
			System.out.println("Index " +i+ " is:  "+ charArray[i]);
				
		}
		System.out.println("str.toLowerCase():   " + str.toLowerCase());
		System.out.println("str.toUpperCase():   " + str.toUpperCase());
		
		
		
	}

}
