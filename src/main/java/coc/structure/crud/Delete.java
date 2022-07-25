package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Delete<T> {
	int delete(T t);
}
