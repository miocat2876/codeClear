package coc.test.mapper;


import coc.test.dto.TestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface TestMapper {

	TestDTO test();

}