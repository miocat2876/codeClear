package coc.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

	DATA_NOT_FOUND(200,"D0001","데이터가 없습니다"),
	INVALID_CODE(400, "C0001", "Invalid Code"),
	INVALID_TYPE_VALUE(400, "C0002", " Invalid Type Value")
	;

	private final int status;
	private final String message;
	private final String code;

	ErrorCode(final int status, final String code, final String message) {
		this.status = status;
		this.message = message;
		this.code = code;
	}
}
