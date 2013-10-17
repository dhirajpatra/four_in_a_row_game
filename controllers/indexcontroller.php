<?php
class IndexController extends Controller
{
	public function index()
	{
		$this->_view->set('title', 'Six in a row game');
		return $this->_view->output();
	}
	
	
	
}