const solution = (num_list) => {
    const answer = num_list.sort((a, b) => a-b);
    return answer.slice(5);
}