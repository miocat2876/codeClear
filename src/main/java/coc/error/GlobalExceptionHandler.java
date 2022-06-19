package coc.error;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/* 예제 https://cheese10yun.github.io/spring-guide-exception */

@ControllerAdvice
@Slf4j
public abstract class GlobalExceptionHandler {

    @ExceptionHandler(DataNotFoundException.class)
    protected ResponseEntity<ErrorResponse> dataNotFoundException(DataNotFoundException e) {
        log.error("dataNotFoundException", e);
        final ErrorCode errorCode = e.getErrorCode();
        final ErrorResponse response = ErrorResponse.of(errorCode);
        return new ResponseEntity<ErrorResponse>(response, HttpStatus.OK);
    }
}
