import React from "react";

function Icon({width = '100%', height = '100%'}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 431 112"
        >
            <path
                fill="#151946"
                d="M96.688 40.608L79.12 108H59.248L48.496 63.648 37.36 108H17.488L.4 40.608h17.568l9.696 49.056 12-49.056h18.048l11.52 49.056 9.792-49.056h17.664zM140.744 108.768c-4.672 0-8.832-.8-12.48-2.4-3.648-1.6-6.528-3.776-8.64-6.528-2.112-2.816-3.296-5.952-3.552-9.408h16.224c.192 1.856 1.056 3.36 2.592 4.512 1.536 1.152 3.424 1.728 5.664 1.728 2.048 0 3.616-.384 4.704-1.152 1.152-.832 1.728-1.888 1.728-3.168 0-1.536-.8-2.656-2.4-3.36-1.6-.768-4.192-1.6-7.776-2.496-3.84-.896-7.04-1.824-9.6-2.784-2.56-1.024-4.768-2.592-6.624-4.704-1.856-2.176-2.784-5.088-2.784-8.736 0-3.072.832-5.856 2.496-8.352 1.728-2.56 4.224-4.576 7.488-6.048 3.328-1.472 7.264-2.208 11.808-2.208 6.72 0 12 1.664 15.84 4.992 3.904 3.328 6.144 7.744 6.72 13.248h-15.168c-.256-1.856-1.088-3.328-2.496-4.416-1.344-1.088-3.136-1.632-5.376-1.632-1.92 0-3.392.384-4.416 1.152-1.024.704-1.536 1.696-1.536 2.976 0 1.536.8 2.688 2.4 3.456 1.664.768 4.224 1.536 7.68 2.304 3.968 1.024 7.2 2.048 9.696 3.072 2.496.96 4.672 2.56 6.528 4.8 1.92 2.176 2.912 5.12 2.976 8.832 0 3.136-.896 5.952-2.688 8.448-1.728 2.432-4.256 4.352-7.584 5.76-3.264 1.408-7.072 2.112-11.424 2.112zM218.448 80.352c0 1.536-.096 3.136-.288 4.8h-37.152c.256 3.328 1.312 5.888 3.168 7.68 1.92 1.728 4.256 2.592 7.008 2.592 4.096 0 6.944-1.728 8.544-5.184H217.2c-.896 3.52-2.528 6.688-4.896 9.504-2.304 2.816-5.216 5.024-8.736 6.624-3.52 1.6-7.456 2.4-11.808 2.4-5.248 0-9.92-1.12-14.016-3.36-4.096-2.24-7.296-5.44-9.6-9.6-2.304-4.16-3.456-9.024-3.456-14.592 0-5.568 1.12-10.432 3.36-14.592 2.304-4.16 5.504-7.36 9.6-9.6 4.096-2.24 8.8-3.36 14.112-3.36 5.184 0 9.792 1.088 13.824 3.264 4.032 2.176 7.168 5.28 9.408 9.312 2.304 4.032 3.456 8.736 3.456 14.112zm-16.8-4.32c0-2.816-.96-5.056-2.88-6.72-1.92-1.664-4.32-2.496-7.2-2.496-2.752 0-5.088.8-7.008 2.4-1.856 1.6-3.008 3.872-3.456 6.816h20.544z"
            ></path>
            <path
                fill="#21C5C5"
                d="M290.688 76.12c0-5.504 1.024-10.336 3.072-14.496 2.112-4.16 4.96-7.36 8.544-9.6 3.584-2.24 7.584-3.36 12-3.36 3.776 0 7.072.768 9.888 2.304 2.88 1.536 5.088 3.552 6.624 6.048v-7.584h16.416V103h-16.416v-7.584c-1.6 2.496-3.84 4.512-6.72 6.048-2.816 1.536-6.112 2.304-9.888 2.304-4.352 0-8.32-1.12-11.904-3.36-3.584-2.304-6.432-5.536-8.544-9.696-2.048-4.224-3.072-9.088-3.072-14.592zm40.128.096c0-4.096-1.152-7.328-3.456-9.696-2.24-2.368-4.992-3.552-8.256-3.552-3.264 0-6.048 1.184-8.352 3.552-2.24 2.304-3.36 5.504-3.36 9.6s1.12 7.36 3.36 9.792c2.304 2.368 5.088 3.552 8.352 3.552 3.264 0 6.016-1.184 8.256-3.552 2.304-2.368 3.456-5.6 3.456-9.696zm44.708-17.856c1.92-2.944 4.32-5.248 7.2-6.912 2.88-1.728 6.08-2.592 9.6-2.592v17.376h-4.512c-4.096 0-7.168.896-9.216 2.688-2.048 1.728-3.072 4.8-3.072 9.216V103h-16.416V49.432h16.416v8.928zm54.503 30.72V103h-8.352c-5.952 0-10.592-1.44-13.92-4.32-3.328-2.944-4.992-7.712-4.992-14.304V63.064h-6.528V49.432h6.528V36.376h16.416v13.056h10.752v13.632h-10.752v21.504c0 1.6.384 2.752 1.152 3.456.768.704 2.048 1.056 3.84 1.056h5.856z"
            ></path>
            <path
                fill="#21C5C5"
                d="M225.168 77.208c0-6.656 1.44-12.576 4.32-17.76 2.88-5.248 6.88-9.312 12-12.192 5.184-2.944 11.04-4.416 17.568-4.416 8 0 14.848 2.112 20.544 6.336s9.504 9.984 11.424 17.28h-18.048c-1.344-2.816-3.264-4.96-5.76-6.432-2.432-1.472-5.216-2.208-8.352-2.208-5.056 0-9.152 1.76-12.288 5.28-3.136 3.52-4.704 8.224-4.704 14.112s1.568 10.592 4.704 14.112c3.136 3.52 7.232 5.28 12.288 5.28 3.136 0 5.92-.736 8.352-2.208 2.496-1.472 4.416-3.616 5.76-6.432h18.048c-1.92 7.296-5.728 13.056-11.424 17.28-5.696 4.16-12.544 6.24-20.544 6.24-6.528 0-12.384-1.44-17.568-4.32-5.12-2.944-9.12-7.008-12-12.192-2.88-5.184-4.32-11.104-4.32-17.76z"
            ></path>
            <path
                fill="#F8981D"
                fillRule="evenodd"
                d="M346.25 46.99c1.013.05 2.035-.088 3.03-.55.387-.195.779-.421 1.135-.824.196-.225.387-.55.452-1.03.148-.992.139-2.062.126-3.093a61.501 61.501 0 00-.317-4.79c-.361-3.475-.943-6.842-1.765-9.905-.522-1.914-1.148-3.71-1.9-5.193-.191-.393-.404-.795-.669-.844-.144-.05-.3.098-.361.402-.061.314-.035.677.017.992.63 3.602 1.261 7.215 1.704 10.955.109.932.205 1.875.27 2.827.074 1.12.139 2.297-.004 3.397-.07.55-.257.981-.479 1.237-.374.441-.795.608-1.213.736-1.03.275-2.065.186-3.099.049-1.144-.167-2.287-.452-3.426-.766-.166-.04-.357-.01-.479.275-.108.245-.095.648-.034.942.108.491.313.825.513 1.11.878 1.335 1.86 2.258 2.878 2.905a7.224 7.224 0 003.621 1.169z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#F8981D"
                fillRule="evenodd"
                d="M288.381 44.163c.191.108.395.01.569-.206.652-.805 1.296-1.649 1.952-2.444 5.013-6.018 10.412-10.366 15.956-13.066 3.23-1.56 6.512-2.572 9.807-2.984 6.604-.884 13.26.844 19.634 4.78a46.417 46.417 0 017.286 5.635c.252.216.496.51.765.57.387.098.805-.285.996-1.07.152-.58.13-1.336-.026-1.905-.178-.648-.478-1.05-.744-1.492-2.778-4.486-5.877-7.912-9.081-10.533-2.226-1.826-4.513-3.25-6.835-4.31-3.317-1.502-6.699-2.267-10.082-2.12-3.304.128-6.599 1.02-9.816 2.7-5.469 2.837-10.704 7.96-15.356 15.048-1.678 2.553-3.278 5.35-4.791 8.374-.178.402-.404.716-.53 1.217-.1.373-.117.864-.022 1.247.061.285.187.48.318.56z"
                clipRule="evenodd"
            ></path>
            <path fill="#151946" d="M115 43v64H99V43h16z"></path>
            <path
                fill="#21C5C5"
                d="M116.892 38.58c-2.888 2.75-2.527 8.296-2.527 8.296h-14.65s.31-5.547-2.527-8.295c-3.146-2.65-5.158-6.48-5.158-10.75 0-7.854 6.706-14.234 14.959-14.234s14.958 6.38 14.958 14.234c0 4.27-1.96 8.1-5.055 10.75z"
            ></path>
            <path
                fill="#E5E5E5"
                d="M114.777 51.245c0 .736-.619 1.325-1.392 1.325h-12.741c-.773 0-1.392-.59-1.392-1.325 0-.737.619-1.326 1.392-1.326h12.689c.774 0 1.444.59 1.444 1.326zM112.869 56.742c0 .736-.619 1.325-1.393 1.325h-8.923c-.774 0-1.393-.589-1.393-1.325s.619-1.325 1.393-1.325h8.923c.774 0 1.393.589 1.393 1.325z"
            ></path>
            <path
                fill="#151946"
                d="M117.666 39.072c3.353-2.897 5.261-6.97 5.261-11.24 0-8.345-7.17-15.168-15.938-15.168-8.769 0-15.939 6.823-15.939 15.167 0 4.369 2.012 8.54 5.416 11.388 2.528 2.405 2.27 7.51 2.27 7.559 0 .245.103.49.258.687.206.196.464.295.722.295h14.597c.258 0 .516-.099.722-.295.207-.196.258-.442.258-.687 0-.05-.258-5.154 2.27-7.56.051-.048.103-.097.103-.147zm-1.444-1.228c-.104.05-.155.148-.207.246-2.269 2.307-2.63 6.086-2.682 7.853h-12.637c-.052-1.816-.464-5.742-2.889-8.05-3.043-2.552-4.797-6.184-4.797-10.013 0-7.363 6.293-13.302 13.979-13.302 7.737 0 13.978 5.989 13.978 13.302 0 3.78-1.702 7.461-4.745 9.964zM123.237 4.663c-.465-.294-1.032-.147-1.342.245l-3.662 5.253c-.309.441-.155.981.258 1.276.155.098.361.147.516.147.309 0 .619-.147.825-.393l3.662-5.252c.31-.392.155-.981-.257-1.276zM95.331 11.388c.155 0 .361-.05.516-.148.465-.294.568-.834.31-1.276l-3.56-5.301c-.309-.442-.876-.54-1.34-.294-.465.294-.568.834-.31 1.276l3.56 5.3c.206.295.515.443.824.443zM81.662 15.805l5.83 2.994c.154.099.309.099.463.099.361 0 .67-.197.877-.491a.902.902 0 00-.412-1.276l-5.829-2.995c-.464-.245-1.083-.098-1.341.393-.206.491-.052 1.03.412 1.276zM126.022 18.947c.155 0 .309-.05.464-.098l5.829-2.995c.464-.245.67-.785.412-1.276a1.026 1.026 0 00-1.341-.393l-5.828 2.995c-.465.245-.671.785-.413 1.276.155.294.516.49.877.49z"
            ></path>
        </svg>
    );
}

export default Icon;