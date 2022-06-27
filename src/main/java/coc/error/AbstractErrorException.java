package coc.error;

public abstract class AbstractErrorException extends RuntimeException {

	private final ErrorCode errorCode;

	public AbstractErrorException(String message, ErrorCode errorCode){
		super(message);
		this.errorCode = errorCode;
	}

	public AbstractErrorException(ErrorCode errorCode){
		super(errorCode.getMessage());
		this.errorCode = errorCode;
	}

	public ErrorCode getErrorCode() {
		return errorCode;
	}
}
