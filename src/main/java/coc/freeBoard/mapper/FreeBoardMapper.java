package coc.freeBoard.mapper;

import coc.freeBoard.dto.FreeBoardDto;
import coc.structure.crud.Create;
import coc.structure.crud.Delete;
import coc.structure.crud.Read;
import coc.structure.crud.Update;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("FreeBoardMapper")
public interface FreeBoardMapper extends Create<FreeBoardDto>, Read<FreeBoardDto>, Update<FreeBoardDto>, Delete<FreeBoardDto> {

}
