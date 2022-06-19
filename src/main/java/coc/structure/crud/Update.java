package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Update<T extends CrudDto>  {
	int update(T t);
}
