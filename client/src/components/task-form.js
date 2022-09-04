import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskForm = ({ onSave }) => {

    const options  = [
        {
            id:1,
            label: "Critical",
            class: "bg-danger"
        },
        {
            id:2,
            label:"High",
            class: "bg-warning"
        },
        {
            id:3,
            label:"Medium",
            class: "bg-primary"
        },
        {
            id:4,
            label:"low",
            class: "bg-secondary"
        }
    ]
    const [errors, setErrors] = useState({
        name:'',
        priority:'',
        duration:''

    })
    const [name, setName] = useState('');
    const [priority, setPriority] = useState(''); 
    const [duration,setDuration] = useState('')

    const onChange = (e) => {
        e.preventDefault();
        setPriority(e.target.value);

    }
    const onSubmit = (e) => {
        e.preventDefault();
        
        resetErrorState()
        validate()
        
        if (name && priority && duration) {
            onSave({ name, priority , duration});
            setName('');
            setPriority('')
            setDuration('')
        }

    }

    const resetErrorState = ()=> {
        setErrors(prevState => ({
            name:'',
            priority: '' ,
            duration:''
        }));
    }
    const validate = ()=> {

        if(!name)
        {
            setErrors(prevState => ({
                ...prevState,
                name: '*Name is required' 
            }));
        }
        if(!priority){
            setErrors(prevState => ({
                ...prevState,
                priority: '*Please select one' 
            }));
        }
        if(!duration){
            setErrors(prevState => ({
                ...prevState,
                duration: '*Duration is required' 
            }));
            
        }
    }
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3 text-left bg-white p-3 rounded">
                <Form.Label>Task Name  </Form.Label> {errors.name &&  <span className="error-message text-danger">{errors.name}</span> }
                <Form.Control type="text"  value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter Task name" />
            </Form.Group>
            <FormGroup className="mb-3 text-left bg-white p-3 rounded">
                <Form.Label>Priority</Form.Label>{errors.priority && <span className="error-message text-danger">{errors.priority}</span> }
                <Form.Select value={priority} onChange={value => onChange(value)} >
                    <option value="" className='mb-3'> -- Choose One --</option>
                    {options.map(opt => (<option key={opt.id} value={opt.id} className="mb-3" >{opt.label}</option>))} 
            </Form.Select>
            </FormGroup>
            <Form.Group className="mb-3 text-left bg-white p-3 rounded">
                <Form.Label >Duration (/hour)</Form.Label>  {errors.duration && <span className="error-message text-danger">{errors.duration}</span> }
                <Form.Control type="number"  value={duration} onChange={(e) => setDuration(e.target.value)}  placeholder="Duration in hour" />
            </Form.Group>
            <Button variant="dark" type="submit" >
                Add
            </Button>
        </Form>
    )
}

export default TaskForm