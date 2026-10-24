# Game playing
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** End-to-end gameplay, Achievement unlocking  

## State of the Field

**Space of definitions.** Across the papers, it is most commonly framed as interaction with a game environment through repeated moves under the game's rules and state updates in order to achieve objectives or win. One recurring formulation emphasizes end-to-end play, where the model is assessed on managing a game from start to finish and must "independently navigate the game." A narrower formulation treats the behavior as accomplishing specific in-game goals, with examples such as collecting resources, crafting tools, or placing objects, and with success described in terms of unlocking achievements while ensuring survival.

**Variants.** Papers use several task names for this behavior, including end-to-end gameplay, game playing, and achievement unlocking. The studied settings range from full-run gameplay, where the agent manages the game from start to finish, to open-world goal completion, where the agent continuously interacts with the environment to accomplish tasks. Some formulations target general objectives or winning, while another focuses specifically on unlocking achievements such as collecting resources, crafting tools, and placing objects.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the available descriptions, the behavior is elicited by having a model play under game rules and state updates or continuously interact with an environment to accomplish tasks, and one paper defines success rate as the proportion of achievements unlocked.

**What it is taken as evidence of.** No construct is linked to it, so the papers summarized here do not explicitly state which construct this behavior is taken to indicate.

## Sources

**[Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf) (as "End-to-end gameplay")**
> Playing a game from start to finish by repeatedly producing moves under the game’s rules and state updates.

**[MEGA-Bench: Scaling Multimodal Evaluation to over 500 Real-World Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/461f1fd5f92e5ca95764a88304dc39f7-Paper-Conference.pdf)**
> The task of interacting with a game environment to achieve objectives or win.

**[Mars: Situated Inductive Reasoning in an Open-World Environment](https://proceedings.neurips.cc/paper_files/paper/2024/file/1fb6d0b52f5e41b11392841a66dbfe7d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Achievement unlocking")**
> The task of accomplishing specific goals such as collecting resources, crafting tools, or placing objects within the game environment.
