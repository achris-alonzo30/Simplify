"use client";

import ListHeader from "./list-header";
import CardForm from "./card-form";
import CardItem from "./card-item";
import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";
import { ElementRef, useRef, useState } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

const ListItem = ({ data, index }: ListItemProps) => {
  const texareaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      texareaRef.current?.focus();
    });
  };
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          className="shrink-0 h-full w-[272px] select-none"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="w-full rounded-md bg-[#F1F2F4] shadow-md pb-2"
            {...provided.dragHandleProps}
          >
            <ListHeader data={data} onAddCard={enableEditing} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem index={index} data={card} key={card.id} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              ref={texareaRef}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
              isEditing={isEditing}
              listId={data.id}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
