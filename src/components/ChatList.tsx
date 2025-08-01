import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MessageCircle, Flag, Key, Crown } from "lucide-react";
import ReportDialog from "./ReportDialog";
import studyTogetherImg from "@/assets/study-together.jpg";

interface User {
  id: string;
  name: string;
  matchPercentage: number;
  lastMessage: string;
  timeAgo: string;
  tags: string[];
  passKey: string;
  isOnline: boolean;
}

interface ChatListProps {
  onUserSelect: (user: User) => void;
  selectedUser: User | null;
}

const ChatList = ({ onUserSelect, selectedUser }: ChatListProps) => {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [reportingUser, setReportingUser] = useState<User | null>(null);

  const users: User[] = [
    {
      id: "MOON_1305",
      name: "MOON_1305",
      matchPercentage: 88,
      lastMessage: "That sounds like a great study schedule...",
      timeAgo: "2m ago",
      tags: ["Night owl", "Clean"],
      passKey: "123",
      isOnline: true,
    },
    {
      id: "CLOUD_7097",
      name: "CLOUD_7097", 
      matchPercentage: 82,
      lastMessage: "I prefer morning workouts too",
      timeAgo: "1h ago",
      tags: ["Early bird", "Social"],
      passKey: "456",
      isOnline: false,
    },
    {
      id: "SUN_5672",
      name: "SUN_5672",
      matchPercentage: 78,
      lastMessage: "Coffee date tomorrow?",
      timeAgo: "3h ago", 
      tags: ["Creative", "Flexible"],
      passKey: "777",
      isOnline: true,
    },
    {
      id: "STAR_4357",
      name: "STAR_4357",
      matchPercentage: 76,
      lastMessage: "Thanks for the room tour pics!",
      timeAgo: "1d ago",
      tags: ["Tech-savvy", "Minimalist"],
      passKey: "098",
      isOnline: false,
    },
    {
      id: "CLOUD_8433",
      name: "CLOUD_8433",
      matchPercentage: 75,
      lastMessage: "Love your music taste!",
      timeAgo: "2d ago",
      tags: ["Music lover", "Quiet"],
      passKey: "678",
      isOnline: true,
    },
  ];

  const handleReport = (user: User) => {
    setReportingUser(user);
    setReportDialogOpen(true);
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 85) return "text-green-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <div className="w-full max-w-md h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-foreground">Your Matches</h2>
          <Badge variant="secondary" className="text-xs">
            {users.length}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Connect with potential roommates
        </p>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {users.map((user) => (
          <Card 
            key={user.id}
            className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md border ${
              selectedUser?.id === user.id 
                ? 'ring-2 ring-primary bg-muted/50' 
                : 'hover:bg-muted/30'
            }`}
            onClick={() => onUserSelect(user)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Crown className="h-6 w-6 text-primary-foreground" />
                  </div>
                  {user.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                  )}
                </div>

                {/* User info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-sm text-foreground truncate">
                      {user.name}
                    </h3>
                    <span className={`text-xs font-semibold ${getMatchColor(user.matchPercentage)}`}>
                      {user.matchPercentage}% match
                    </span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2 truncate">
                    {user.lastMessage}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {user.timeAgo}
                    </span>
                    <div className="flex items-center gap-1">
                      <Key className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-mono">
                        {user.passKey}
                      </span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {user.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs px-2 py-0 h-5 bg-warm-accent/20 border-warm-accent/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle view profile
                  }}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View Profile
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    onUserSelect(user);
                  }}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Chat
                </Button>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-7 w-7 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleReport(user);
                }}
              >
                <Flag className="h-3 w-3" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Engagement image */}
      <div className="p-4 border-t border-border">
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={studyTogetherImg} 
            alt="Study together" 
            className="w-full h-24 object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
            <p className="text-primary-foreground text-sm font-medium text-center">
              Find your perfect study buddy!
            </p>
          </div>
        </div>
      </div>

      {/* Report Dialog */}
      {reportingUser && (
        <ReportDialog
          isOpen={reportDialogOpen}
          onClose={() => {
            setReportDialogOpen(false);
            setReportingUser(null);
          }}
          userName={reportingUser.name}
        />
      )}
    </div>
  );
};

export default ChatList;