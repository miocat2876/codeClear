package coc.error;

public class DataNotFoundException extends AbstractErrorException{

	public DataNotFoundException() {
		super(ErrorCode.DATA_NOT_FOUND);
	}
	public DataNotFoundException(String message,ErrorCode errorCode) {
		super(message,ErrorCode.DATA_NOT_FOUND);
	}
}
