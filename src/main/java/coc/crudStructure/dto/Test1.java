package coc.crudStructure.dto;

import java.util.List;

public interface Test1<T extends  TestDto> {
	List<T> Tests(T t);
}
