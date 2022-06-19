package coc.util;

import org.apache.tomcat.util.codec.binary.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;

public class AES256Cipher {

	private final static String BLOCK_TYPE = "AES/CBC/PKCS5Padding";
	private final static String ENCODING = "UTF-8";
	private KeySpec keySpec;
	
	public AES256Cipher(KeySpec kyeSpec) {
		this.keySpec = kyeSpec;
	}

	@SuppressWarnings("static-access")
	public String AesEncode(String str) throws InvalidKeyException, InvalidAlgorithmParameterException, Exception {

		Cipher c = Cipher.getInstance(BLOCK_TYPE);
		c.init(c.ENCRYPT_MODE, keySpec.getKey(), keySpec.getIvKey());
		byte[] encodeStr = c.doFinal(str.getBytes(ENCODING));
		
		return new String(new Base64().encodeBase64(encodeStr));
		
	}

	@SuppressWarnings("static-access")
	public String AesDecode(String str) throws InvalidKeyException, InvalidAlgorithmParameterException, Exception {

		Cipher c = Cipher.getInstance(BLOCK_TYPE);
		c.init(c.DECRYPT_MODE, keySpec.getKey(), keySpec.getIvKey());//iv UTF-8
		byte[] decodeStr = Base64.decodeBase64(str.getBytes());
		
		return new String(c.doFinal(decodeStr),ENCODING);
		
	}

	public static class KeySpec{
		
		private String key = "random";
		private String ivKey = "";
		private SecretKeySpec secreatKey;
		private IvParameterSpec secreatIvKey;

		public void setKey(String key) {
			this.key = key;
		}

		public void setIvKey(String ivKey) {
			this.ivKey = ivKey;
		}
		
		public SecretKeySpec getKey() throws Exception {
			if(secreatKey == null) {
				secreatKey = createKey(key);
			}
			
			return secreatKey;
		}

		public IvParameterSpec getIvKey() throws Exception {
			
			if(secreatIvKey == null) {
				ivKey = ivKey == null ? key : ivKey;
				secreatIvKey = createIvKey(ivKey);
			}
			
			return secreatIvKey;
		}
		
		private IvParameterSpec createIvKey(String key) throws Exception {
			
			return new IvParameterSpec(getKeyByte(key));
		}
		
		private SecretKeySpec createKey(String key) throws Exception {
			
			return new SecretKeySpec(getKeyByte(key), "AES");
		}
		
		private byte[] getKeyByte(String key) throws Exception {
			
			if(key.length() < 16) {
				throw new Exception("key length is not 16");
			}
			
			byte[] keyBytes = new byte[16];
			byte[] paramKey = key.getBytes(ENCODING);
			
			System.arraycopy(paramKey, 0, keyBytes, 0, Math.min(paramKey.length, keyBytes.length));
			
			return keyBytes;
		}

		public AES256Cipher bulid() {
			
			return new AES256Cipher(this);
		}
	}
}
