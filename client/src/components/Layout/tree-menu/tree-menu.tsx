import React, {useEffect, useState} from 'react';
import {useMeasure, usePrevious} from '../../../assets/hooks';
import {animated, useSpring} from 'react-spring';
import {Content, Frame, Header, IconWrapper, Title} from './tree-menu.style';
import {Button} from '@/components/Others/button/button';
import {ArrowNext} from '@/assets/icons/ArrowNext';
import {CategoryIcon} from "@/components/Layout/header/menu/left-menu/LeftMenu";

const Tree = React.memo(
    ({
         children,
         name,
         icon,
         // isOpen,
         onClick,
         dropdown,
         depth,
         defaultOpen = false,
     }: any) => {
        const [isOpen, setOpen] = useState(defaultOpen);
        useEffect(() => {
            setOpen(defaultOpen);
        }, [defaultOpen]);
        const previous = usePrevious(isOpen);
        const [bind, {height: viewHeight}] = useMeasure();
        const {height, opacity, transform} = useSpring<any>({
            from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
            to: {
                height: isOpen ? viewHeight : 0,
                opacity: isOpen ? 1 : 0,
                transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
            },
        });
        // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;
        // @ts-ignore
        return (
            <Frame depth={depth}>
                <Header open={isOpen} depth={depth} className={depth}>
                    <IconWrapper depth={depth}>
                        <CategoryIcon link={icon} height={"25px"} width={"25px"} />
                    </IconWrapper>
                    <Title onClick={onClick} depth={depth}>{name}</Title>

                    {dropdown === true && (
                        <Button
                            onClick={() => setOpen(!isOpen)}
                            variant='text'
                            className='toggleButton'
                        >

                            <ArrowNext/>
                        </Button>
                    )}
                </Header>
                <Content
                    style={{
                        opacity,
                        height: isOpen && previous === isOpen ? 'auto' : height,
                    }}
                >
                    <animated.div style={{transform}} {...bind} children={children}/>
                </Content>
            </Frame>
        );
    }
);

type Props = {
    className?: any;
    data: any;
    onClick: (slug: string,parent?:string) => void;
    active?: {
        category:string[]|string,
        subCategory:string[]|string
    };
};
export const TreeMenu: React.FC<Props> = ({
                                              data,
                                              className,
                                              onClick,
                                              active,
                                          }) => {
    const handler = (children: any,category?:string) => {
        return children?.map((subOption: any) => {
            if (!subOption.subCategory) {
                return (
                    <Tree
                        key={subOption._id}
                        name={subOption.name}
                        icon={subOption?.image}
                        depth='child'
                        onClick={() => onClick(subOption.id, category)}
                        defaultOpen={active.subCategory === subOption.id}
                    />
                );
            }
            return (
                <Tree
                    key={subOption._id}
                    name={subOption.name}
                    icon={subOption.image}
                    dropdown={!subOption.subCategory.length ? false : true}
                    depth='parent'
                    onClick={() => onClick(subOption.id)}
                    defaultOpen={
                        active.category === subOption.id
                    }
                >
                    {handler(subOption.subCategory,subOption.id)}
                </Tree>
            );
        });
    };
    return <>{handler(data?.data)}</>;
};
