package coc.freeBoard.controller;

import coc.freeBoard.dto.FreeBoardDto;
import coc.freeBoard.service.FreeBoardService;
import common.ResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/* http 상태코드정리 https://www.whatap.io/ko/blog/40/ */
/* REST full https://memostack.tistory.com/180 */
/* get 조회 */
/* post 등록 */
/* put 업데이트 */
/* delete 삭제 */


@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/board")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;

    @ResponseBody
    @GetMapping("/{boardType}")
    public ResponseEntity<String> getBoardList(@PathVariable String boardType, FreeBoardDto dto) {

        String sampleResultData = freeBoardService.sample(dto) + "";

        log.info("============샘플시작===========");
        log.info(sampleResultData);
        log.info("============끝===========");

        return ResponseEntity.ok("");
    }

    @ResponseBody
    @DeleteMapping("/{boardType}/{id}")
    public ResponseEntity<String> deleteBoard(@PathVariable String boardType,@PathVariable String id,FreeBoardDto dto) {

        String sampleResultData = freeBoardService.sample(dto) + "";

        log.info("============샘플시작===========");
        log.info(sampleResultData);
        log.info("============끝===========");

        return new ResponseEntity<String>(sampleResultData, new HttpHeaders(), HttpStatus.valueOf(200));
    }


}
