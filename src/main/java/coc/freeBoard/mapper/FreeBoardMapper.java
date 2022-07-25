package coc.freeBoard.mapper;

import coc.freeBoard.dto.FreeBoardDto;
import coc.structure.crud.Create;
import coc.structure.crud.Delete;
import coc.structure.crud.Read;
import coc.structure.crud.Update;
import coc.structure.dto.CrudDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("FreeBoardMapper")
public interface FreeBoardMapper<T extends FreeBoardDto> extends Create<T>, Read<T>, Update<T>, Delete<T> {

}
