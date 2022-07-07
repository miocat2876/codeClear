package common;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Builder
public class ResponseDto<T> {
	private String message;
	private int status;
	private T data;
}
