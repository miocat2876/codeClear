package coc.structure.crud;

import coc.structure.dto.CrudDto;

import java.util.List;

public interface Read<T> {
	List<T> read(T t);
}
