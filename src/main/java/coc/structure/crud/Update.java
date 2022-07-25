package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Update<T>  {
	int update(T t);
}
