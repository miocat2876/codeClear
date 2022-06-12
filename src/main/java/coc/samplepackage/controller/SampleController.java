package coc.samplepackage.controller;

import coc.samplepackage.dto.SampleDto;
import coc.samplepackage.service.SampleService;
import coc.samplepackage.service.SampleServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class SampleController {

    private final SampleService sampleServiceImpl;

    @ResponseBody
    @GetMapping(value = "/")
    public ResponseEntity<String> main(SampleDto dto) {

        String sampleResultData = sampleServiceImpl.sample(dto) + "";

        log.info("============샘플시작===========");
        log.info(sampleResultData);
        log.info("============끝===========");

        return new ResponseEntity<String>(sampleResultData, new HttpHeaders(), HttpStatus.valueOf(200));
    }
}
