package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Create<T extends CrudDto>  {
	int create(T t);
}
