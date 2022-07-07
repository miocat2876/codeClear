package coc.freeBoard.controller;

import coc.error.DataNotFoundException;
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
// REST full     /member <-회원관리 주소
//               /member/1 get방식 조회
//               /member post방식으로 등록
//               /member put 방식으로 수정
//               /member delete 방식으로 삭제
//               /member/{id} -> 회원

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/board")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;

    @ResponseBody
    @GetMapping("/members")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<ResponseDto<Integer>> getBoardList(@PathVariable String id, FreeBoardDto dto) {

        Integer sampleResultData = freeBoardService.sample(dto);



        log.info("============샘플시작===========");
        log.info(sampleResultData + "");
        log.info("============끝===========");

        return ResponseEntity.ok(ResponseDto.<Integer>builder().message("테스트").status(HttpStatus.OK.value()).data(sampleResultData).build());
    }

    @ResponseBody
    @PostMapping("/{boardType}/{id}")
    public ResponseEntity<String> insertBoard(@PathVariable String boardType,@PathVariable String id,FreeBoardDto dto) {

        String sampleResultData = freeBoardService.sample(dto) + "";

        log.info("============샘플시작===========");
        log.info(sampleResultData);
        log.info("============끝===========");

        return new ResponseEntity<String>(sampleResultData, new HttpHeaders(), HttpStatus.valueOf(200));
    }

    @ResponseBody
    @PutMapping("/{boardType}/{id}")
    public ResponseEntity<String> updateBoard(@PathVariable String boardType,@PathVariable String id,FreeBoardDto dto) {

        String sampleResultData = freeBoardService.sample(dto) + "";

        log.info("============샘플시작===========");
        log.info(sampleResultData);
        log.info("============끝===========");

        return new ResponseEntity<String>(sampleResultData, new HttpHeaders(), HttpStatus.valueOf(200));
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
