package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Delete<T extends CrudDto> {
	int delete(T t);
}
