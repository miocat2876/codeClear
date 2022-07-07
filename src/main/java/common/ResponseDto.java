package common;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ResponseDto<T> {
	private String message;
	private int status;
	private T data;

	@Builder
	public ResponseDto(String message, int status, T data){
		this.message = message;
		this.status = status;
		this.data = data;
	}
}
