package coc.controller;

import coc.test.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@RequiredArgsConstructor
@Controller
public class MainController {

    private final TestMapper testMapper;

    @ResponseBody
    @GetMapping(value = "/")
    public String main() {

        log.info(testMapper.test().toString());

        return "test 8";
    }
}
